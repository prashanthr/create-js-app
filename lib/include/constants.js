import { version, author } from '../../package.json'

export default {
  version,
  author,
  CLI_CMD: 'create-js-app'
}

export const helpCommands = [
  '--help',
  '-h'
]

export const validCommands = [
  '--name',
  '-n',
  '-target',
  '-t',
  ...helpCommands
]
