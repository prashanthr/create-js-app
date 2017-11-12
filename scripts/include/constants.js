'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validCommands = exports.yarnCommands = exports.debugCommands = exports.targetCommands = exports.nameCommands = exports.helpCommands = exports.CLI_CMD = exports.version = exports.author = undefined;

var _package = require('../../package.json');

var author = exports.author = 'Prashanth Rajaram';
var version = exports.version = _package.version;
var CLI_CMD = exports.CLI_CMD = 'create-javascript-app';

var helpCommands = exports.helpCommands = ['--help', '--h'];

var nameCommands = exports.nameCommands = ['--name', '--n'];

var targetCommands = exports.targetCommands = ['--target', '--t'];

var debugCommands = exports.debugCommands = ['--debug', '--d'];

var yarnCommands = exports.yarnCommands = ['--yarn', '--yn'];

var validCommands = exports.validCommands = [].concat(helpCommands, nameCommands, targetCommands);