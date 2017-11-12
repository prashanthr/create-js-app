'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _util = require('./util');

var printWelcome = function printWelcome() {
  var WELCOME_MSG = '\n  WELCOME TO CREATE JS APP\n  Version: ' + _constants.version + '\n  Author: ' + _constants.author + '\n  ';
  (0, _util.logForce)(WELCOME_MSG);
};

exports.default = printWelcome;