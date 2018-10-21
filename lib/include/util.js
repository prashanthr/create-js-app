import fs from 'fs-extra'
import path from 'path'
import { exec } from 'child_process'
import { MESSAGES } from './constants'

export const getSourcePath = () => path.join(__dirname, '../../template/')
export const getTargetPath = (targetPath, appName) => path.join(targetPath || process.cwd(), appName)

export const pathExists = (path) => {
  return fs.existsSync(path)
}

export const copyFiles = (sourcePath, targetPath) => {
  if (!pathExists(sourcePath)) {
    logForce(`
      Source path ${sourcePath} does not exist.
      ${MESSAGES.abort}
    `)
    return
  }
  if (!pathExists(targetPath)) {
    log(`ℹ️  Target path ${targetPath} does not exist. Creating it...`)
    fs.mkdirSync(targetPath)
  }
  logForce(MESSAGES.copyingFiles)
  fs.copySync(sourcePath, targetPath)
  logForce(MESSAGES.fileCopySuccess)
}

export const updatePackageJson = (targetPath, name) => {
  logForce(MESSAGES.updatingPkgJson)
  const pkgPath = path.join(targetPath, 'package.json')
  let pkg = fs.readFileSync(pkgPath, 'utf-8')
  pkg = pkg.replace(':name', name)
  fs.truncateSync(pkgPath)
  fs.writeFileSync(pkgPath, pkg)
  log(MESSAGES.pkgJsonUpdateSuccess)
}

export const yarnInstall = (targetPath) => {
  // exec cd targetPath && yarn install
  logForce(MESSAGES.installingPkgs)
  return new Promise((resolve, reject) => {
    exec('yarn', { cwd: targetPath }, (err, stdout, stderr) => {
      if (err) {
        logForce(`Error occurred while running yarn install ${stderr}. ❌`)
        return reject(stderr)
      }
      logForce(MESSAGES.pkgsInstallSuccess)
      log(`${stdout}`)
      resolve(stdout)
    })
  })
}

export const getArg = (yargs, index) => yargs._ && yargs._.length > 0 ? yargs._[index] : null
export const getFirstArg = (yargs) => getArg(yargs, 0)

export const setDebugFlag = (debug) => {
  process.env.CJS_DEBUG = !!debug
}

export const log = (...params) => {
  if (process.env.CJS_DEBUG) {
    logForce(...params)
  }
}

export const logForce = (...params) => {
  console.log(' ', ...params)
}
