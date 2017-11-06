'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = exports.yarnInstall = exports.updatePackageJson = exports.copyFiles = exports.createDir = exports.pathExists = exports.parseArguments = undefined;

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _constants = require('./constants');

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseArguments = exports.parseArguments = function parseArguments(args) {
  console.log('yargs', _yargs2.default);
  console.log('yargs.argv', _yargs2.default.argv);
  if (args.length < 3) {
    (0, _help2.default)();
    return null;
  }

  var validArgs = args.slice(2, args.length);
  if (validArgs.filter(function (arg) {
    return _constants.helpCommands.includes(arg);
  }).length > 0) {
    (0, _help2.default)();
    return null;
  }

  validArgs = validArgs.filter(function (arg) {
    return arg && arg.includes('=');
  });
  if (!validArgs) {
    (0, _help2.default)();
    return null;
  }
  var argKeys = validArgs.map(function (arg) {
    return arg.split('=')[0].replace('--', '');
  });
  var argValues = validArgs.map(function (arg) {
    return arg.split('=')[1];
  });
  log('keys', argKeys);
  log('values', argValues);
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
    name: appName,
    debug: getParam(argKeys, argValues, ['d', 'debug']),
    yarn: getParam(argKeys, argValues, ['yarn', 'yn'])
  };
};
// import fs from 'fs'
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
  console.log('Copying Files...');
  if (!pathExists(targetPath)) {
    _fsExtra2.default.mkdirSync(targetPath);
  }

  _fsExtra2.default.copySync(sourcePath, targetPath);
};

var updatePackageJson = exports.updatePackageJson = function updatePackageJson(targetPath, name) {
  // read
  // replace
  // write
  var pkg = _fsExtra2.default.readFile(_path2.default.join(targetPath, 'package.json'), 'utf-8');
  pkg = pkg.replace(':name', name);
  _fsExtra2.default.truncateSync(targetPath);
  _fsExtra2.default.writeFileSync(targetPath, pkg);
};

var yarnInstall = exports.yarnInstall = function yarnInstall(targetPath) {
  // exec cd targetPath && yarn install
  return new Promise(function (resolve, reject) {
    (0, _child_process.exec)('yarn', { cwd: targetPath }, function (err, stdout, stderr) {
      if (err) {
        console.log('Error occurred while running yarn install ' + stderr + '.');
        return reject(stderr);
      }
      console.log('Packages installed successfully ' + stdout + '.');
      resolve(stdout);
    });
  });
};

var log = exports.log = function log() {
  if (process.env.CJS_DEBUG) {
    var _console;

    (_console = console).log.apply(_console, arguments);
  }
};