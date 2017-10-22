'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('./util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var work = function work(args) {
  console.log('args', args);
  var params = (0, _util.parseArguments)(args);
  if (!params) {
    return;
  }
  console.log('params', params);
  console.log('\n    Constructing your app ' + params.name + '...');
};

exports.default = work;