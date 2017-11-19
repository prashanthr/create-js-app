import {
  getSourcePath,
  getTargetPath,
  copyFiles,
  updatePackageJson,
  yarnInstall,
  setDebugFlag,
  logForce,
  getFirstArg
 } from './util'
import yargv from './yargs'
import { defaultAppName } from './constants'

const work = () => {
  try {
    if (!yargv) {
      throw new Error('Internal error. No arguments specified.')
    }
    if (yargv.name === defaultAppName) {
      yargv.name = getFirstArg(yargv) || defaultAppName
    }
    setDebugFlag(yargv.debug)
    logForce(`Constructing your app ${yargv.name}...`)
    const sourcePath = getSourcePath()
    const targetPath = getTargetPath(yargv.target, yargv.name)
    copyFiles(
      sourcePath,
      targetPath
    )
    updatePackageJson(targetPath, yargv.name)
    if (yargv.yarn) {
      yarnInstall(targetPath)
    }
  } catch (err) {
    throw new Error(err)
  }
}

export default work
