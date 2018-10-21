"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGES = exports.quickstartReadme = exports.defaultAppName = exports.version = exports.author = exports.CLI_CMD = void 0;

var _package = require("../../package.json");

const CLI_CMD = 'create-javascript-app';
exports.CLI_CMD = CLI_CMD;
const author = 'Prashanth Rajaram';
exports.author = author;
const version = _package.version;
exports.version = version;
const defaultAppName = 'moi-crazy-app';
exports.defaultAppName = defaultAppName;
const quickstartReadme = 'QUICKSTART.md';
exports.quickstartReadme = quickstartReadme;
const MESSAGES = {
  construction: `⚛️  Constructing your app`,
  setupComplete: `Setup complete ✅\n`,
  force: `\nMay the force be with you! 🤖\n`,
  copyingFiles: `📂 Copying Files...`,
  fileCopySuccess: `Files copied successfully. ✅\n`,
  updatingPkgJson: `ℹ️  Updating package.json...`,
  pkgJsonUpdateSuccess: `package.json updated successfully.✅\n`,
  installingPkgs: '📦 Installing packages...',
  pkgsInstallSuccess: `Packages installed successfully. ✅\n`,
  noArgsError: `Internal error. No arguments specified.`,
  abort: `Aborting... ❌`
};
exports.MESSAGES = MESSAGES;