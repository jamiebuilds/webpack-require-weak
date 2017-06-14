// @flow
'use strict';

const isWebpackBundle = require('is-webpack-bundle');

/*::
declare var __webpack_require__: Function;
*/

module.exports = isWebpackBundle ? __webpack_require__ : null;
