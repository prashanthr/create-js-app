import constants from './constants'
const printHelp = () => {
  const HELP_MSG = `
  Usage: ${constants.CLI_CMD} [options]
  
  Options:
  --help: Prints this message
  --name: Name of your application
  `
  console.log(HELP_MSG)
}

export default printHelp
