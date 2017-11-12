import {
  getSourcePath,
  getTargetPath,
  copyFiles,
  updatePackageJson,
  yarnInstall,
  setDebugFlag,
  logForce
 } from './util'
import yargv from './yargs'

const work = () => {
  try {
    if (!yargv) {
      // todo: remove because yargs takes care of this?
      return
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
