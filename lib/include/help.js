import constants from './constants'
const printHelp = () => {
  const HELP_MSG = `
  Usage: ${constants.CLI_CMD} [options]
  
  Options:
  --help | --h:   Prints this message
  --name | --n:   Name of your application
  --target | --t: Target folder for your application. Defaults to current directory
  --yarn | --yn:  Runs a yarn install to setup your app. Enable this flag to have your work done for you or you can do this manually
  --debug | --d:  Prints debug friendly messages to the console
  `
  console.log(HELP_MSG)
}

export default printHelp
