'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printHelp = function printHelp() {
  var HELP_MSG = '\n  Usage: ' + _constants2.default.CLI_CMD + ' [options]\n  \n  Options:\n  --help | --h:   Prints this message\n  --name | --n:   Name of your application\n  --target | --t: Target folder for your application. Defaults to current directory\n  --yarn | --yn:  Runs a yarn install to setup your app. Enable this flag to have your work done for you or you can do this manually\n  --debug | --d:  Prints debug friendly messages to the console\n  ';
  console.log(HELP_MSG);
};

exports.default = printHelp;