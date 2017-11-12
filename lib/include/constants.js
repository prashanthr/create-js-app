import { version as verzion } from '../../package.json'

export const author = 'Prashanth Rajaram'
export const version = verzion
export const CLI_CMD = 'create-javascript-app'

export const helpCommands = [
  '--help',
  '--h'
]

export const nameCommands = [
  '--name',
  '--n'
]

export const targetCommands = [
  '--target',
  '--t'
]

export const debugCommands = [
  '--debug',
  '--d'
]

export const yarnCommands = [
  '--yarn',
  '--yn'
]

export const validCommands = [
  ...helpCommands,
  ...nameCommands,
  ...targetCommands
]
