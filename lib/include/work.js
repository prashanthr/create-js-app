import {
  parseArguments,
  copyFiles,
  updatePackageJson,
  yarnInstall
 } from './util'

const work = (args) => {
  console.log('args', args)
  const params = parseArguments(args)
  if (!params) {
    return
  }
  console.log('params', params)
  console.log(`
    Constructing your app ${params.name}...`
  )
  copyFiles(
    params.sourceDir,
    params.targetDir
  )
  updatePackageJson()
  yarnInstall()
}

export default work
