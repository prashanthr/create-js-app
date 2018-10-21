"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("./constants");

var _util = require("./util");

const printWelcome = () => {
  const WELCOME_MSG = `
  WELCOME TO CREATE JS APP 🚀
  Version: ${_constants.version}
  Author: ${_constants.author}
  `;
  (0, _util.logForce)(WELCOME_MSG);
};

var _default = printWelcome;
exports.default = _default;