import {
  getSourcePath,
  getTargetPath,
  copyFiles,
  updatePackageJson,
  yarnInstall
 } from './util'
import yargv from './yargs'

const work = () => {
  console.log('yargv', yargv)
  if (!yargv) {
    // todo: remove because yargs takes care of this?
    return
  }
  console.log(`
    Constructing your app ${yargv.name}...`
  )
  if (yargv.debug) {
    process.env.CJS_DEBUG = true
  } else {
    process.env.CJS_DEBUG = false
  }

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
}

export default work
