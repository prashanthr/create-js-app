'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validCommands = exports.helpCommands = undefined;

var _package = require('../../package.json');

exports.default = {
  version: _package.version,
  author: _package.author,
  CLI_CMD: 'create-js-app'
};
var helpCommands = exports.helpCommands = ['--help', '-h'];

var validCommands = exports.validCommands = ['--name', '-n'].concat(helpCommands);