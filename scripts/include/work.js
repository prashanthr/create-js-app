"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _util = require("./util");

var _yargs = _interopRequireDefault(require("./yargs"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const work = async () => {
  try {
    if (!_yargs.default) {
      throw new Error(_constants.MESSAGES.noArgsError);
    }

    if (_yargs.default.name === _constants.defaultAppName) {
      _yargs.default.name = (0, _util.getFirstArg)(_yargs.default) || _constants.defaultAppName;
    }

    (0, _util.setDebugFlag)(_yargs.default.debug);
    (0, _util.logForce)(`${_constants.MESSAGES.construction} ${_yargs.default.name}...\n`);
    const sourcePath = (0, _util.getSourcePath)();
    const targetPath = (0, _util.getTargetPath)(_yargs.default.target, _yargs.default.name);
    (0, _util.copyFiles)(sourcePath, targetPath);
    (0, _util.updatePackageJson)(targetPath, _yargs.default.name);

    if (_yargs.default.yarn) {
      await (0, _util.yarnInstall)(targetPath);
    }

    (0, _util.logForce)(_constants.MESSAGES.setupComplete);
    (0, _util.logForce)(`To get started:
      - Simply navigate to ${targetPath}. 
      - You can find a quick start readme at ${_constants.quickstartReadme}
    `);
    (0, _util.logForce)(_constants.MESSAGES.force);
  } catch (err) {
    throw new Error(err);
  }
};

var _default = work;
exports.default = _default;