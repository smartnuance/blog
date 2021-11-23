# Gatsby Markdown Typescript Personal Website

This is a personal website / blog using [Gatsby](https://www.gatsbyjs.org/), [Markdown](https://www.markdownguide.org/), [Typescript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), [Talwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/) & [React Font Awesome](https://github.com/FortAwesome/react-fontawesome/).

## Base template

[Gatsby Markdown Typescript Personal Website](https://gatsby-markdown-typescript-personal-website.netlify.app/)

## Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, using the Gatsby Markdown Typescript Personal Website Starter.

    ```shell
    gatsby new my-site-name https://github.com/SaimirKapaj/gatsby-markdown-typescript-personal-website
    ```

2.  **Develop**

    Navigate into your new site’s directory and start the development environment.

    ```shell
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`

3.  **Build**

    Get an optimized production build for your site generating static HTML and JavaScript, CSS bundles.

    ```shell
    gatsby build
    ```

4.  **Serve**

    Starts a local server for testing your production site.

    ```shell
    gatsby serve
    ```

    Your production site is now running at `http://localhost:9000`

## Write content

### Diagrams with PlantUML

> docker run -d -p 8050:8080 --name plantuml_server --network host plantuml/plantuml-server:jetty-v1.2021.14

Install [VScode extension](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) and set two settings:

    Plantuml: Render = PlantUMLServer
    Plantuml: Server = http://localhost:8080
