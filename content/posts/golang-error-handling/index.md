---
title: Fix Golang's error handling
draft: true
date: 2020-09-03T21:41:18-04:00
description:
  Golang's error handling is not (yet) fixed, but my prefered solution is in
  reach.
tags: [Golang, Coding]
---

Error handling is hard. Golang takes a refreshing approach by making everything
_explicit_. Sounds cumbersome, is cumbersome and the one simple but powerful
error handling concept has to be invented still. Maybe by you, after you read
this article.

## Error handling by throwing Exceptions

Many high-level languages support some version of _Exceptions_ triggering
_exceptional_ control flows. They are mostly written like this:

```
try {
	// risky code
} catch ValidationException as e {
	// react to the validation errors
} catch Exception as e {
	// react to the any generic error not handled before
}
```

And libraries or you yourself can throw an Exception wherever they or you
encounter a state they do not know how to handle. By throwing an Exception, you
are basically saying

> Somebody else must handle this mess, I'm just cleaning my table and leaving.

"Somebody else" can not be specified by the one encountering the problem. The
"cleaning part" on the other hand is important do be done by the one
encountering it or by somebody that knows how to clean up blocked resources.
This two points shouldn't be too far from each other, otherwise as a caller, we
need a lot of knowledge about the internals of a machinery we just want to
invoke to get some result. Actually, getting resources always cleaned up
correcty is hard to get right and many memory leaks result from Exceptions
thrown without proper cleaning of **what the caller can not know how to clean
up**.

## What is an error?

Most languages' error concepts are built on the assumption:

> an error is whatever (locally) interrupts the normal control flow.

I think this is not a helpful explanation and we should rather describe the use
cases in which we want to use Exceptions. Basically an error is nothing more
than an other _return path_ with maybe another set of _return values_ than the
expected flow from invoking a function. For multiple different errors that could
occur, we could just return different sets of values depending on what extra
information we want to pass along. In pseudo-code

```
return (result1, result2)
	OR (error description)
	OR (a different error description, some fallback result)
```

Golang has multiple return values and the convention is to return an `error` as
the _last_ value that describes the error by incorporating more information like
an error message or an error code into a struct that implements the error
interface:

```golang
return "", err
```

or

```golang
return "", &myErrorStruct
```

Thus we really don't need exceptions if we accept two facts:

- errors cannot be "thrown" more then one level up in the call hierarchy
- errors have to be explicitely checked for at each and every call that returns
  errors

  ```golang
  result, err := ...
  if err != nil {

  }
  ```

## Cleaning resources

Golang has a construct, the `defer` statement, that can be used to cleanup.

premises:

- why should you not detect errors by string, but by code (when interfacing
  systems), or by type (inside one service)
- errors new error concept with %w is very limited, you can not wrap a error
  received by `err := ...` with **your own detectable error wrapper** without
  loosing the original error. Basically when stacking errors, one error loose
  its type and becomes an error string.
- https://play.golang.org/p/h3L4Ck4EzLC

---

ohje, mir war das bewusst, ich habe aber ein Steilpass für diesen Fehler
eingeführt.

Ich verwende mit ValidationError wenn dann == vergleiche für konkrete checks und
für die detektion dann ja den wrapper der ein wirklich anderer Type ist:

```golang
type ValidationErrors struct {
	Errs []ValidationError
}

func (v *ValidationErrors) Error() string {
	...
}
```

Oder wenn ich den wrapper sparen will, dann

```golang
type ExportValidationError struct {
	error
}

var ErrKeyNotFound = ExportValidationError{errors.New("key not found")}
```

PS rant: Golang hat es leider verpeilt ein
[type alias](https://yourbasic.org/golang/type-alias/) als solches zu benennen,
wie z.B. Kotlin: typealias NodeSet = Set<Network.Node>
