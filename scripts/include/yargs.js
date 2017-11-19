'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yargv = _yargs2.default.usage('Usage: $0 [options]').options({
  'n': {
    alias: 'name',
    demandOption: true,
    default: _constants.defaultAppName,
    describe: 'The name of your JS application',
    type: 'string',
    nargs: 1
  },
  't': {
    alias: 'target',
    demandOption: false,
    default: process.cwd(),
    describe: 'Target folder for your application. Defaults to current directory',
    type: 'string',
    nargs: 1
  },
  'yn': {
    alias: 'yarn',
    demandOption: false,
    default: false,
    describe: 'Runs a yarn install to setup your app. Enable this flag to have your work done for you or you can do this manually',
    type: 'boolean',
    nargs: 1
  },
  'd': {
    alias: 'debug',
    demandOption: false,
    default: false,
    describe: 'Prints debug and verbose messages to the console',
    type: 'boolean',
    nargs: 1
  }
}).example('$0 --n my-crazy-app').help('h').alias('h', 'help').epilogue('Fin.').argv;
exports.default = yargv;