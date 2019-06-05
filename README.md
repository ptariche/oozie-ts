# Oozie-API
A Node module for Oozie in Typescript

[![npm version](https://badge.fury.io/js/oozie-api.svg)](https://badge.fury.io/js/oozie-api)
[![Build Status](https://travis-ci.org/ptariche/oozie-ts.svg?branch=master)](https://travis-ci.org/ptariche/oozie-ts)

## Documentation

* [MARKDOWN](./docs-markdown/README.md)
* [HTML](./docs-html/index.html)

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
  import {client} from 'oozie-api'; or  const CLIENT = require('oozie-api').client;

  let _client = new CLIENT||client({
    oozieUrl: 'http://127.0.0.1:11000/oozie'
  });

  _client..buildVersion().then(result => console.log(result));
  
```

### Enums Usage
```js
  import * as OozieAPIEnums from 'oozie-api/dist/types' or   const OOZIEAPI_ENUMS = require('oozie-api/dist/types');
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
