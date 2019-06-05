# Oozie-API
A Node module for Oozie in Typescript


[![Build Status](https://travis-ci.org/ptariche/typescript-koa-mongoose-starter.svg?branch=master)](https://travis-ci.org/ptariche/typescript-koa-mongoose-starter)

Documentation
----
[MARKDOWN](./docs-markdown/index.md)
[HTML](./docs-html/index.html)

----
### Prerequisites
- Node 10+


### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save oozie-api
$ npm start
```

### Usage
```js
  import {client} from 'oozie-api';
  const client = require('oozie-api').client;
```

### Development
Want to contribute? Great! Make a Pr!
Open your favorite Terminal and run these commands.


#### Building for source
To release in javascript. The output is dumped in the dist folder:
```sh
$ npm run build
```

#### Testing
* Uses Jest, Supertest, Chai and MongoDB Memory Server

    ```sh
    npm test
    ```

Changelog
----
[Link](./CHANGELOG.md)

License
----
[Apache-2.0](./LICENSE)


Author
----
[Peter A. Tariche](https://github.com/ptariche)
