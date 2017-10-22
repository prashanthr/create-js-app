import printHelp from './help'
import { validCommands, helpCommands } from './constants'
import fs from 'fs'

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
  return {
    nodePath: args[0],
    execPath: args[1],
    name: argValues[getNameIndex(argKeys)]
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
  const abortMsg = (path) => {
    console.log(`
    ${path} does not exist.
    Aborting...
    `)
  }

  if (!pathExists(sourcePath)) {
    abortMsg(sourcePath)
    return
  }

  if (!pathExists(targetPath)) {
    abortMsg(targetPath)
    return
  }
}
