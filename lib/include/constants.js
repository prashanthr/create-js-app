import { version as verzion } from '../../package.json'

export const CLI_CMD = 'create-javascript-app'
export const author = 'Prashanth Rajaram'
export const version = verzion
export const defaultAppName = 'moi-crazy-app'
export const quickstartReadme = 'QUICKSTART.md'

export const MESSAGES = {
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
}
