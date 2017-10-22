'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printWelcome = function printWelcome() {
  var WELCOME_MSG = '\n  WELCOME TO CREATE JS APP!\n  Version: ' + _constants2.default.version + '\n  Author: ' + _constants2.default.author;

  console.log(WELCOME_MSG);
};

exports.default = printWelcome;