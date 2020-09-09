---
title: Fix Golang errors handling
draft: true
date: 2020-09-03T21:41:18-04:00
description: Golang's error handling is not (yet) fixed, but my prefered solution is in reach.
tags: [Golang, Coding]
---

Error handling is hard. Golang takes a refreshing approach by making everything _explicit_. Sounds cumbersome, is cumbersome and the last work have not been spoken when it comes to language design for error handling. Let's talk a little more.

{{< toc >}}

premises:

- why should you not detect errors by string, but by code (when interfacing systems), or by type (inside one service)
- errors new error concept with %w is very limited, you can not wrap a error received by `err := ...` with **your own detectable error wrapper** without loosing the original error. Basically when stacking errors, one error loose its type and becomes an error string.
- https://play.golang.org/p/h3L4Ck4EzLC


---

ohje, mir war das bewusst, ich habe aber ein Steilpass für diesen Fehler eingeführt.

Ich verwende mit ValidationError wenn dann == vergleiche für konkrete checks
und für die detektion dann ja den wrapper der ein wirklich anderer Type ist:
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

PS rant: Golang hat es leider verpeilt ein [type alias](https://yourbasic.org/golang/type-alias/) als solches zu benennen, wie z.B. Kotlin:
typealias NodeSet = Set<Network.Node>