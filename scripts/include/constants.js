'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validCommands = exports.yarnCommands = exports.debugCommands = exports.targetCommands = exports.nameCommands = exports.helpCommands = undefined;

var _package = require('../../package.json');

exports.default = {
  version: _package.version,
  author: _package.author,
  CLI_CMD: 'create-js-app'
};
var helpCommands = exports.helpCommands = ['--help', '--h'];

var nameCommands = exports.nameCommands = ['--name', '--n'];

var targetCommands = exports.targetCommands = ['--target', '--t'];

var debugCommands = exports.debugCommands = ['--debug', '--d'];

var yarnCommands = exports.yarnCommands = ['--yarn', '--yn'];

var validCommands = exports.validCommands = [].concat(helpCommands, nameCommands, targetCommands);