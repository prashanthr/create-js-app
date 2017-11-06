'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yargv = _yargs2.default.usage('Usage: $0 [options]').options({
  'n': {
    alias: 'name',
    demandOption: true,
    default: 'moi-create-js-app',
    describe: 'The name for your JS app.',
    type: 'string',
    nargs: 1
  },
  't': {
    alias: 'target',
    demandOption: false,
    default: __dirname,
    describe: 'Debug',
    type: 'string',
    nargs: 1
  },
  'yn': {
    alias: 'yarn',
    demandOption: false,
    default: false,
    describe: 'Also run a yarn install',
    type: 'boolean',
    nargs: 1
  },
  'd': {
    alias: 'debug',
    demandOption: false,
    default: false,
    describe: 'Debug',
    type: 'boolean',
    nargs: 1
  }
}).example('$0 --n my-crazy-app', 'Create my crazy app using create-js-app').help('h').alias('h', 'help').argv;
exports.default = yargv;