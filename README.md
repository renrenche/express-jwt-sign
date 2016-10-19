# express-jwt-sign

> jwt signature generator for express

## Installation

```sh
$ npm install --save express-jwt-sign
```

## Usage

```js
const express = require('express');
const jwtsign = require('express-jwt-sign');

const app = express();
app.use(jwtsign(appId, appSecret, {
    pathPattern: /\/star\/evaluations\//,   // ignore to generate jwt signature on all requests
    expireInSeconds: 60,
});

app.use(function (req, res, next) {
    console.log(req.__jwtsignature);
});


```
## License

MIT © [wangshijun]()


[npm-image]: https://badge.fury.io/js/express-jwt-sign.svg
[npm-url]: https://npmjs.org/package/express-jwt-sign
[travis-image]: https://travis-ci.org/wangshijun/express-jwt-sign.svg?branch=master
[travis-url]: https://travis-ci.org/wangshijun/express-jwt-sign
[daviddm-image]: https://david-dm.org/wangshijun/express-jwt-sign.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/wangshijun/express-jwt-sign
[coveralls-image]: https://coveralls.io/repos/wangshijun/express-jwt-sign/badge.svg
[coveralls-url]: https://coveralls.io/r/wangshijun/express-jwt-sign
