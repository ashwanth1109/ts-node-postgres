# Setting up a node-postgres app using typscript

## Install typescript and tsc-watch

```
npm i typescript tsc-watch
```

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

tsc-watch: The TypeScript compiler with --onSuccess argument

```
"scripts": {
    "dev": "tsc-watch --onSuccess \"node ./dist/server.js\""
}
```
