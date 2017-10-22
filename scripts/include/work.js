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
  console.log('Cloning into ');
  (0, _util.copyFiles)(params.sourceDir, params.targetDir);
};

exports.default = work;