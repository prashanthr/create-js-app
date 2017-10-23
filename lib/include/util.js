import printHelp from './help'
import { validCommands, helpCommands } from './constants'
// import fs from 'fs'
import fs from 'fs-extra'
import path from 'path'

export const parseArguments = (args) => {
  if (args.length < 3) {
    console.log('here')
    printHelp()
    return null
  }

  let validArgs = args.slice(2, args.length)
  if (
    validArgs.filter(arg => helpCommands.includes(arg)).length > 0
  ) {
    console.log('here2', validArgs,validArgs.filter(arg => validCommands.includes(arg)).length === 0
    ,validArgs.filter(arg => helpCommands.includes(arg)).length > 0)
    printHelp()
    return null
  }

  validArgs = validArgs.filter(arg => arg && arg.includes('='))
  if (!validArgs) {
    console.log('here3')
    printHelp()
    return null
  }
  const argKeys = validArgs.map(arg => {
    return arg.split('=')[0].replace('--', '')
  })
  const argValues = validArgs.map(arg => {
    return arg.split('=')[1]
  })
  console.log('keys', argKeys)
  console.log('values', argValues)
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
    name: appName
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

export const updatePackageJson = (path, name) => {
  // read
  // replace
  // write
}

export const yarnInstall = (path) => {
  // exec cd path && yarn install
}
