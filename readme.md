# What is this?

This is a boilerplate repo can be used as a quickstart for multi-package (multi-workspace) cross-platform project. Each "sub-package" can be an independent package with its own language, target platform (web react app, node server app, es6, es5, typescript, cross platform javascript module etc), scripts, etc.

Packages can easily depend on each other (including cross references), and each package can be easily extracted to separate NPM package.

## Current packages

- my-module1 - es6 javascript module
- my-module2 - common-js javascript module
- my-ts-modul1 - typescript(esnext) + webpack module compiled into multiple distributions: development (index.js) and production (index.min.js)
- my-react-app - default react-app, uses my-module1, my-module2, my-ts-module1
