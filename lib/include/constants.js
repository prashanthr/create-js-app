import { version, author } from '../../package.json'

export default {
  version,
  author,
  CLI_CMD: 'create-js-app'
}

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
