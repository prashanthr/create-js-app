'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyFiles = exports.createDir = exports.pathExists = exports.parseArguments = undefined;

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _constants = require('./constants');

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fs from 'fs'
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
  var getParam = function getParam(allKeys, allValues, validKeys) {
    var paramIndex = -1;
    validKeys.some(function (key) {
      var index = allKeys.indexOf(key);
      if (index && index > -1) {
        paramIndex = index;
        return true;
      }
    });
    console.log('paramIndex', paramIndex);
    if (paramIndex > -1) {
      return allValues[paramIndex];
    } else {
      return undefined;
    }
  };
  var getTargetDir = function getTargetDir(appName) {
    var targetDir = getParam(argKeys, argValues, ['t', 'target']);
    console.log('targetDir', targetDir);
    return _path2.default.join(targetDir || __dirname, appName);
  };
  var appName = argValues[getNameIndex(argKeys)];
  var sourceDir = _path2.default.join(__dirname, '../../');
  var templateDir = _path2.default.join(sourceDir, 'template');

  return {
    nodePath: args[0],
    execPath: args[1],
    sourceDir: sourceDir,
    templateDir: templateDir,
    targetDir: getTargetDir(),
    name: appName
  };
};

var pathExists = exports.pathExists = function pathExists(path) {
  return _fsExtra2.default.existsSync(path);
};
var createDir = exports.createDir = function createDir(path) {
  if (pathExists(path)) {
    console.log(path + ' exists}. Skipping creation.');
  } else {
    _fsExtra2.default.mkdirSync(path);
  }
};

var copyFiles = exports.copyFiles = function copyFiles(sourcePath, targetPath) {

  if (!pathExists(sourcePath)) {
    console.log('\n    Source path ' + sourcePath + ' does not exist.\n    Aborting...\n    ');
    return;
  }

  if (!pathExists(targetPath)) {
    _fsExtra2.default.mkdirSync(targetPath);
  }

  _fsExtra2.default.copySync(sourcePath, targetPath);
};