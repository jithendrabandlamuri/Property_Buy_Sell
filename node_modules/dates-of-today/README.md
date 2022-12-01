# dates-of-today
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Get today's date as an object.

## Installation
```bash
$ npm install dates-of-today
```

## Usage
```js
const today = require('dates-of-today')
today()
// => {
//   year: 2015,
//   month: '07',
//   day: '15',
//   date: '2015-07-15'
// }
```

## API
### date = today()
Get today's date as an object. Months and days are prefixed with leading zeros.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/dates-of-today.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dates-of-today
[travis-image]: https://img.shields.io/travis/yoshuawuyts/dates-of-today/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/dates-of-today
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/dates-of-today/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/dates-of-today
[downloads-image]: http://img.shields.io/npm/dm/dates-of-today.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/dates-of-today
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
