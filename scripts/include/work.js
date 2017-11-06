'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _yargs = require('./yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var work = function work(args) {
  // console.log('args', args)
  console.log('yargv', _yargs2.default);
  return;
  var params = (0, _util.parseArguments)(args);
  if (!params) {
    return;
  }
  console.log('params', params);
  console.log('\n    Constructing your app ' + params.name + '...');
  if (params.debug) {
    process.env.CJS_DEBUG = true;
  } else {
    process.env.CJS_DEBUG = false;
  }

  (0, _util.copyFiles)(params.sourceDir, params.targetDir);
  (0, _util.updatePackageJson)(params.targetDir, params.name);
  if (params.yarn) {
    (0, _util.yarnInstall)(params.targetDir);
  }
};

exports.default = work;