import {
  parseArguments,
  copyFiles,
  updatePackageJson,
  yarnInstall
 } from './util'
import yargv from './yargs'

const work = (args) => {
  // console.log('args', args)
  console.log('yargv', yargv)
  return
  const params = parseArguments(args)
  if (!params) {
    return
  }
  console.log('params', params)
  console.log(`
    Constructing your app ${params.name}...`
  )
  if (params.debug) {
    process.env.CJS_DEBUG = true
  } else {
    process.env.CJS_DEBUG = false
  }
  
  copyFiles(
    params.sourceDir,
    params.targetDir
  )
  updatePackageJson(params.targetDir, params.name)
  if (params.yarn) {
    yarnInstall(params.targetDir)
  }
}

export default work
