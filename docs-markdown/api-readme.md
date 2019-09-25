---
id: api-readme
title: oozie-api
sidebar_label: oozie-api
---

[

Oozie-API
=========

](#oozie-api)

A Node module for Oozie in Typescript

[![npm version](https://badge.fury.io/js/oozie-api.svg)](https://badge.fury.io/js/oozie-api) [![Build Status](https://travis-ci.org/ptariche/oozie-ts.svg?branch=master)](https://travis-ci.org/ptariche/oozie-ts)

[

Documentation
-------------

](#documentation)

*   [MARKDOWN](./docs-markdown/api-readme.md)

* * *

[

### Prerequisites

](#prerequisites)

*   Node 10+

[

### Installation

](#installation)

Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save oozie-api
```

[

### Usage

](#usage)

```js
  import {client} from 'oozie-api'; or  const CLIENT = require('oozie-api').client;

  let _client = new CLIENT\|\|client({
    oozieUrl: 'http://127.0.0.1:11000/oozie'
  });

  _client.buildVersion().then(result => console.log(result));

```

[

### Enums Usage

](#enums-usage)

```js
  import * as OozieAPIEnums from 'oozie-api/dist/types' or   const OOZIEAPI_ENUMS = require('oozie-api/dist/types');
```

[

### Development

](#development)

Want to contribute? Great! Make a Pr! Open your favorite Terminal and run these commands.

[

#### Building for source

](#building-for-source)

To release in javascript. The output is dumped in the dist folder:

```sh
$ npm run build
```

[

#### Testing

](#testing)

*   Uses Jest, Supertest, Chai - Integration Tests needed
    
    ```sh
      npm test
    ```
    

[

Changelog
---------

](#changelog)

[Link](./CHANGELOG.md)

[

License
-------

](#license)

[Apache-2.0](./LICENSE)

[

Author
------

](#author)

[Peter A. Tariche](https://github.com/ptariche)

### External modules

* [[index Module]](api-modules-index-module.md)
* [[types/index Module]](api-modules-types-index-module.md)

---

