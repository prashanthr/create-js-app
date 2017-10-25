import printHelp from './help'
import { validCommands, helpCommands } from './constants'
// import fs from 'fs'
import fs from 'fs-extra'
import path from 'path'
import { exec } from 'child_process'

export const parseArguments = (args) => {
  if (args.length < 3) {
    printHelp()
    return null
  }

  let validArgs = args.slice(2, args.length)
  if (
    validArgs.filter(arg => helpCommands.includes(arg)).length > 0
  ) {
    printHelp()
    return null
  }

  validArgs = validArgs.filter(arg => arg && arg.includes('='))
  if (!validArgs) {
    printHelp()
    return null
  }
  const argKeys = validArgs.map(arg => {
    return arg.split('=')[0].replace('--', '')
  })
  const argValues = validArgs.map(arg => {
    return arg.split('=')[1]
  })
  log('keys', argKeys)
  log('values', argValues)
  const getNameIndex = (args) => {
    const name = args.indexOf('name')
    return (name && name > -1)
      ? name
      : args.indexOf('n')
  }
  const getParam = (allKeys, allValues, validKeys) => {
    let paramIndex = -1
    validKeys.some(key => {
      let index = allKeys.indexOf(key)
      if (index && index > -1) {
        paramIndex = index
        return true
      }
    })
    console.log('paramIndex', paramIndex)
    if (paramIndex > -1) {
      return allValues[paramIndex]
    } else {
      return undefined
    }
  }
  const getTargetDir = (appName) => {
    const targetDir = getParam(argKeys, argValues, ['t', 'target'])
    console.log('targetDir', targetDir)
    return path.join(targetDir || __dirname, appName)
  }
  const appName = argValues[getNameIndex(argKeys)]
  const sourceDir = path.join(__dirname, '../../')
  const templateDir = path.join(sourceDir, 'template')
  
  return {
    nodePath: args[0],
    execPath: args[1],
    sourceDir,
    templateDir,
    targetDir: getTargetDir(),
    name: appName,
    debug: getParam(argKeys, argValues, ['d', 'debug']),
    yarn: getParam(argKeys, argValues, ['yarn', 'yn'])
  }
}

export const pathExists = (path) => {
  return fs.existsSync(path)
}
export const createDir = (path) => {
  if (pathExists(path)) {
    console.log(`${path} exists}. Skipping creation.`)
  } else {
    fs.mkdirSync(path)
  }
}

export const copyFiles = (sourcePath, targetPath) => {

  if (!pathExists(sourcePath)) {
    console.log(`
    Source path ${sourcePath} does not exist.
    Aborting...
    `)
    return
  }
  console.log(`Copying Files...`)
  if (!pathExists(targetPath)) {
    fs.mkdirSync(targetPath)
  }

  fs.copySync(sourcePath, targetPath)
}

export const updatePackageJson = (targetPath, name) => {
  // read
  // replace
  // write
  let pkg = fs.readFile(path.join(targetPath, 'package.json'), 'utf-8')
  pkg = pkg.replace(':name', name)
  fs.truncateSync(targetPath)
  fs.writeFileSync(targetPath, pkg)
}

export const yarnInstall = (targetPath) => {
  // exec cd targetPath && yarn install
  return new Promise((resolve, reject) => {
    exec('yarn', { cwd: targetPath }, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error occurred while running yarn install ${stderr}.`)
        return reject(stderr)
      }
      console.log(`Packages installed successfully ${stdout}.`)
      resolve(stdout)
    })
  })
}

export const log = (...params) => {
  if (process.env.CJS_DEBUG) {
    console.log(...params)
  }
}
