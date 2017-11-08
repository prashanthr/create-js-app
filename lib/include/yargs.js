import yargs from 'yargs'

const yargv = yargs
  .usage('Usage: $0 [options]')
  .options({
    'n': {
      alias: 'name',
      demandOption: true,
      default: 'moi-create-js-app',
      describe: 'The name of your JS application',
      type: 'string',
      nargs: 1
    },
    't': {
      alias: 'target',
      demandOption: false,
      default: __dirname,
      describe: 'Target folder for your application. Defaults to current directory',
      type: 'string',
      nargs: 1
    },
    'yn': {
      alias: 'yarn',
      demandOption: false,
      default: false,
      describe: 'Runs a yarn install to setup your app. Enable this flag to have your work done for you or you can do this manually',
      type: 'boolean',
      nargs: 1
    },
    'd': {
      alias: 'debug',
      demandOption: false,
      default: false,
      describe: 'Prints debug and verbose messages to the console',
      type: 'boolean',
      nargs: 1
    }
  })
  .example('$0 --n my-crazy-app', 'Create my crazy app using create-js-app')
  .help('h')
  .alias('h', 'help')
  .epilogue('Fin.')
  .argv
export default yargv
