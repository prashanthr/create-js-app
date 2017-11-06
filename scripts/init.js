#! /usr/bin/env node
'use strict';

var _welcome = require('./include/welcome');

var _welcome2 = _interopRequireDefault(_welcome);

var _work = require('./include/work');

var _work2 = _interopRequireDefault(_work);

var _end = require('./include/end');

var _end2 = _interopRequireDefault(_end);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _welcome2.default)();
(0, _work2.default)();
(0, _end2.default)();