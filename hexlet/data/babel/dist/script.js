'use strict';

var _fsPlus = require('fs-plus');

var _fsPlus2 = _interopRequireDefault(_fsPlus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_fsPlus2.default.getHomeDirectory());
console.log(_fsPlus2.default.listSync('/Users/liza/Downloads'));