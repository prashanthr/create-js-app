"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logForce = exports.log = exports.setDebugFlag = exports.getFirstArg = exports.getArg = exports.yarnInstall = exports.updatePackageJson = exports.copyFiles = exports.pathExists = exports.getTargetPath = exports.getSourcePath = void 0;

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _path = _interopRequireDefault(require("path"));

var _child_process = require("child_process");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getSourcePath = () => _path.default.join(__dirname, '../../template/');

exports.getSourcePath = getSourcePath;

const getTargetPath = (targetPath, appName) => _path.default.join(targetPath || process.cwd(), appName);

exports.getTargetPath = getTargetPath;

const pathExists = path => {
  return _fsExtra.default.existsSync(path);
};

exports.pathExists = pathExists;

const copyFiles = (sourcePath, targetPath) => {
  if (!pathExists(sourcePath)) {
    logForce(`
      Source path ${sourcePath} does not exist.
      ${_constants.MESSAGES.abort}
    `);
    return;
  }

  if (!pathExists(targetPath)) {
    log(`ℹ️  Target path ${targetPath} does not exist. Creating it...`);

    _fsExtra.default.mkdirSync(targetPath);
  }

  logForce(_constants.MESSAGES.copyingFiles);

  _fsExtra.default.copySync(sourcePath, targetPath);

  logForce(_constants.MESSAGES.fileCopySuccess);
};

exports.copyFiles = copyFiles;

const updatePackageJson = (targetPath, name) => {
  logForce(_constants.MESSAGES.updatingPkgJson);

  const pkgPath = _path.default.join(targetPath, 'package.json');

  let pkg = _fsExtra.default.readFileSync(pkgPath, 'utf-8');

  pkg = pkg.replace(':name', name);

  _fsExtra.default.truncateSync(pkgPath);

  _fsExtra.default.writeFileSync(pkgPath, pkg);

  log(_constants.MESSAGES.pkgJsonUpdateSuccess);
};

exports.updatePackageJson = updatePackageJson;

const yarnInstall = targetPath => {
  // exec cd targetPath && yarn install
  logForce(_constants.MESSAGES.installingPkgs);
  return new Promise((resolve, reject) => {
    (0, _child_process.exec)('yarn', {
      cwd: targetPath
    }, (err, stdout, stderr) => {
      if (err) {
        logForce(`Error occurred while running yarn install ${stderr}. ❌`);
        return reject(stderr);
      }

      logForce(_constants.MESSAGES.pkgsInstallSuccess);
      log(`${stdout}`);
      resolve(stdout);
    });
  });
};

exports.yarnInstall = yarnInstall;

const getArg = (yargs, index) => yargs._ && yargs._.length > 0 ? yargs._[index] : null;

exports.getArg = getArg;

const getFirstArg = yargs => getArg(yargs, 0);

exports.getFirstArg = getFirstArg;

const setDebugFlag = debug => {
  process.env.CJS_DEBUG = !!debug;
};

exports.setDebugFlag = setDebugFlag;

const log = (...params) => {
  if (process.env.CJS_DEBUG) {
    logForce(...params);
  }
};

exports.log = log;

const logForce = (...params) => {
  console.log(' ', ...params);
};

exports.logForce = logForce;