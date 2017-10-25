'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var work = function work(args) {
  console.log('args', args);
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