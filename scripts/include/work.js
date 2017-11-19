'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _yargs = require('./yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var work = function work() {
  try {
    if (!_yargs2.default) {
      throw new Error('Internal error. No arguments specified.');
    }
    if (_yargs2.default.name === _constants.defaultAppName) {
      _yargs2.default.name = (0, _util.getFirstArg)(_yargs2.default) || _constants.defaultAppName;
    }
    (0, _util.setDebugFlag)(_yargs2.default.debug);
    (0, _util.logForce)('Constructing your app ' + _yargs2.default.name + '...');
    var sourcePath = (0, _util.getSourcePath)();
    var targetPath = (0, _util.getTargetPath)(_yargs2.default.target, _yargs2.default.name);
    (0, _util.copyFiles)(sourcePath, targetPath);
    (0, _util.updatePackageJson)(targetPath, _yargs2.default.name);
    if (_yargs2.default.yarn) {
      (0, _util.yarnInstall)(targetPath);
    }
  } catch (err) {
    throw new Error(err);
  }
};

exports.default = work;