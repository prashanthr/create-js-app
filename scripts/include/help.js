'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printHelp = function printHelp() {
  var HELP_MSG = '\n  Usage: ' + _constants2.default.CLI_CMD + ' [options]\n  \n  Options:\n  --help: Prints this message\n  --name: Name of your application\n  ';
  console.log(HELP_MSG);
};

exports.default = printHelp;