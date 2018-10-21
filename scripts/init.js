#! /usr/bin/env node
"use strict";

var _welcome = _interopRequireDefault(require("./include/welcome"));

var _work = _interopRequireDefault(require("./include/work"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _welcome.default)();
(0, _work.default)();