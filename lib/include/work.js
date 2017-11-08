import {
  getSourcePath,
  getTargetPath,
  copyFiles,
  updatePackageJson,
  yarnInstall,
  log,
  logForce
 } from './util'
import yargv from './yargs'

const work = () => {
  if (!yargv) {
    // todo: remove because yargs takes care of this?
    return
  }
  logForce(`Constructing your app ${yargv.name}...`)
  if (yargv.debug) {
    process.env.CJS_DEBUG = true
  } else {
    process.env.CJS_DEBUG = false
  }

  const sourcePath = getSourcePath()
  log('sourcePath', sourcePath)
  const targetPath = getTargetPath(yargv.target, yargv.name)
  log('targetPath', targetPath)
  
  copyFiles(
    sourcePath,
    targetPath
  )
  updatePackageJson(targetPath, yargv.name)
  if (yargv.yarn) {
    yarnInstall(targetPath)
  }
}

export default work
