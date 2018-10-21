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
import { defaultAppName, quickstartReadme, MESSAGES } from './constants'

const work = async () => {
  try {
    if (!yargv) {
      throw new Error(MESSAGES.noArgsError)
    }
    if (yargv.name === defaultAppName) {
      yargv.name = getFirstArg(yargv) || defaultAppName
    }
    setDebugFlag(yargv.debug)
    logForce(`${MESSAGES.construction} ${yargv.name}...\n`)
    const sourcePath = getSourcePath()
    const targetPath = getTargetPath(yargv.target, yargv.name)
    copyFiles(
      sourcePath,
      targetPath
    )
    updatePackageJson(targetPath, yargv.name)
    if (yargv.yarn) {
      await yarnInstall(targetPath)
    }
    logForce(MESSAGES.setupComplete)
    logForce(`To get started:
      - Simply navigate to ${targetPath}. 
      - You can find a quick start readme at ${quickstartReadme}
    `)
    logForce(MESSAGES.force)
  } catch (err) {
    throw new Error(err)
  }
}

export default work
