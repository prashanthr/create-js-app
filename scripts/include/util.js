'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFiles = exports.createDir = exports.pathExists = exports.parseArguments = undefined;

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _constants = require('./constants');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseArguments = exports.parseArguments = function parseArguments(args) {
  if (args.length < 3) {
    console.log('here');
    (0, _help2.default)();
    return null;
  }

  var validArgs = args.slice(2, args.length);
  if (validArgs.filter(function (arg) {
    return _constants.helpCommands.includes(arg);
  }).length > 0) {
    console.log('here2', validArgs, validArgs.filter(function (arg) {
      return _constants.validCommands.includes(arg);
    }).length === 0, validArgs.filter(function (arg) {
      return _constants.helpCommands.includes(arg);
    }).length > 0);
    (0, _help2.default)();
    return null;
  }

  validArgs = validArgs.filter(function (arg) {
    return arg && arg.includes('=');
  });
  if (!validArgs) {
    console.log('here3');
    (0, _help2.default)();
    return null;
  }
  var argKeys = validArgs.map(function (arg) {
    return arg.split('=')[0].replace('--', '');
  });
  var argValues = validArgs.map(function (arg) {
    return arg.split('=')[1];
  });
  console.log('keys', argKeys);
  console.log('values', argValues);
  var getNameIndex = function getNameIndex(args) {
    var name = args.indexOf('name');
    return name && name > -1 ? name : args.indexOf('n');
  };
  return {
    nodePath: args[0],
    execPath: args[1],
    name: argValues[getNameIndex(argKeys)]
  };
};

var pathExists = exports.pathExists = function pathExists(path) {
  return _fs2.default.existsSync(path);
};
var createDir = exports.createDir = function createDir(path) {
  if (pathExists(path)) {
    console.log(path + ' exists}. Skipping creation.');
  } else {
    _fs2.default.mkdirSync(path);
  }
};

var copyFiles = exports.copyFiles = function copyFiles(sourcePath, targetPath) {
  var abortMsg = function abortMsg(path) {
    console.log('\n    ' + path + ' does not exist.\n    Aborting...\n    ');
  };

  if (!pathExists(sourcePath)) {
    abortMsg(sourcePath);
    return;
  }

  if (!pathExists(targetPath)) {
    abortMsg(targetPath);
    return;
  }
};