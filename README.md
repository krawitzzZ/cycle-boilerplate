# Cycle boilerplate

 This is the boilerplate depend on *cyc* CLI. It provides an intuitive and hassle-free starting point for Cycle.js applications. It contains all of the most useful Cycle.js libraries. It comes with production and development webpack configurations,  dynamic hot reloading, Babel transpilation, unintrusive long-term caching, and an isomorphic express server.

## Features
- production and development webpack configurations
- project-wide babel transpilation
- hot reloading with cycle-restart
- dynamic isomorphic loading with dynamic-require
- declarative server endpoints
- long-term caching

## Installing

```sh
$ git clone https://github.com/krawitzzZ/cycle-boilerplate.git
$ cd cycle-boilerplate
$ npm i
$ npm run dev
```

The develop version of website is now live on [localhost:3000](http://localhost:3000/).

Have a look in ./src/app/ and play around with the files. An index page with a BMI calculator, a simple about page and simple counter are already generated. Each file is hot reloadable.

You can also build the server and run it in production. Compiling the client bundles may take a while, because this build step utilizes heavy optimization.

```sh
$ npm run mk
$ PORT=8080 npm start
```

## npm scripts

- `dev` start dev server
- `mkserver` build production server (fast)
- `mkclient` build production client (slow)
- `mk` build production server and client
- `start` start production server (requires built server and client)
