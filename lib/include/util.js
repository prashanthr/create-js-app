import fs from 'fs-extra'
import path from 'path'
import { exec } from 'child_process'

export const getSourcePath = () => path.join(__dirname, '../../')
export const getTargetPath = (targetPath, appName) => path.join(targetPath || __dirname, appName)

export const pathExists = (path) => {
  return fs.existsSync(path)
}

export const copyFiles = (sourcePath, targetPath) => {
  if (!pathExists(sourcePath)) {
    log(`
      Source path ${sourcePath} does not exist.
      Aborting...
    `)
    return
  }
  if (!pathExists(targetPath)) {
    log(`Target path does not exist. Creating it...`)
    fs.mkdirSync(targetPath)
  }
  logForce(`Copying Files...`)
  fs.copySync(sourcePath, targetPath)
  logForce(`Files copied successfully.`)
}

export const updatePackageJson = (targetPath, name) => {
  logForce(`Updating package.json...`)
  const pkgPath = path.join(targetPath, 'package.json')
  let pkg = fs.readFileSync(pkgPath, 'utf-8')
  logForce('PKG', pkg)
  pkg = pkg.replace(':name', name)
  fs.truncateSync(pkgPath)
  fs.writeFileSync(pkgPath, pkg)
}

export const yarnInstall = (targetPath) => {
  // exec cd targetPath && yarn install
  logForce('Installing packages...')
  return new Promise((resolve, reject) => {
    exec('yarn', { cwd: targetPath }, (err, stdout, stderr) => {
      if (err) {
        logForce(`Error occurred while running yarn install ${stderr}.`)
        return reject(stderr)
      }
      logForce(`Packages installed successfully ${stdout}.`)
      resolve(stdout)
    })
  })
}

export const log = (...params) => {
  if (process.env.CJS_DEBUG) {
    logForce(...params)
  }
}

export const logForce = (...params) => {
  console.log(' ', ...params)
}
