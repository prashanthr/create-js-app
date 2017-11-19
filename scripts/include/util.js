'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logForce = exports.log = exports.setDebugFlag = exports.getFirstArg = exports.getArg = exports.yarnInstall = exports.updatePackageJson = exports.copyFiles = exports.pathExists = exports.getTargetPath = exports.getSourcePath = undefined;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getSourcePath = exports.getSourcePath = function getSourcePath() {
  return _path2.default.join(__dirname, '../../');
};
var getTargetPath = exports.getTargetPath = function getTargetPath(targetPath, appName) {
  return _path2.default.join(targetPath || process.cwd(), appName);
};

var pathExists = exports.pathExists = function pathExists(path) {
  return _fsExtra2.default.existsSync(path);
};

var copyFiles = exports.copyFiles = function copyFiles(sourcePath, targetPath) {
  if (!pathExists(sourcePath)) {
    logForce('\n      Source path ' + sourcePath + ' does not exist.\n      Aborting...\n    ');
    return;
  }
  if (!pathExists(targetPath)) {
    log('Target path ' + targetPath + ' does not exist. Creating it...');
    _fsExtra2.default.mkdirSync(targetPath);
  }
  logForce('Copying Files...');
  _fsExtra2.default.copySync(sourcePath, targetPath);
  logForce('Files copied successfully.');
};

var updatePackageJson = exports.updatePackageJson = function updatePackageJson(targetPath, name) {
  logForce('Updating package.json...');
  var pkgPath = _path2.default.join(targetPath, 'package.json');
  var pkg = _fsExtra2.default.readFileSync(pkgPath, 'utf-8');
  pkg = pkg.replace(':name', name);
  _fsExtra2.default.truncateSync(pkgPath);
  _fsExtra2.default.writeFileSync(pkgPath, pkg);
  log('package.json updated successfully.');
};

var yarnInstall = exports.yarnInstall = function yarnInstall(targetPath) {
  // exec cd targetPath && yarn install
  logForce('Installing packages...');
  return new Promise(function (resolve, reject) {
    (0, _child_process.exec)('yarn', { cwd: targetPath }, function (err, stdout, stderr) {
      if (err) {
        logForce('Error occurred while running yarn install ' + stderr + '.');
        return reject(stderr);
      }
      logForce('Packages installed successfully.');
      log('' + stdout);
      resolve(stdout);
    });
  });
};

var getArg = exports.getArg = function getArg(yargs, index) {
  return yargs._ && yargs._.length > 0 ? yargs._[index] : null;
};
var getFirstArg = exports.getFirstArg = function getFirstArg(yargs) {
  return getArg(yargs, 0);
};

var setDebugFlag = exports.setDebugFlag = function setDebugFlag(debug) {
  process.env.CJS_DEBUG = !!debug;
};

var log = exports.log = function log() {
  if (process.env.CJS_DEBUG) {
    logForce.apply(undefined, arguments);
  }
};

var logForce = exports.logForce = function logForce() {
  var _console;

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  (_console = console).log.apply(_console, [' '].concat(params));
};