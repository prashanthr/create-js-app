'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _yargs = require('./yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var work = function work() {
  if (!_yargs2.default) {
    // todo: remove because yargs takes care of this?
    return;
  }
  (0, _util.logForce)('Constructing your app ' + _yargs2.default.name + '...');
  if (_yargs2.default.debug) {
    process.env.CJS_DEBUG = true;
  } else {
    process.env.CJS_DEBUG = false;
  }

  var sourcePath = (0, _util.getSourcePath)();
  (0, _util.log)('sourcePath', sourcePath);
  var targetPath = (0, _util.getTargetPath)(_yargs2.default.target, _yargs2.default.name);
  (0, _util.log)('targetPath', targetPath);

  (0, _util.copyFiles)(sourcePath, targetPath);
  (0, _util.updatePackageJson)(targetPath, _yargs2.default.name);
  if (_yargs2.default.yarn) {
    (0, _util.yarnInstall)(targetPath);
  }
};

exports.default = work;