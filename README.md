**CREATE JS APP**

This is a project bootstraped with create-react-app & Node.js to give you the perfect combination of client and server to help you build highly performant and scalable applications with the correct, essential pacakages.

This project is built with the following technologies

- React (react, react-dom, react-router)
- Redux (redux, react-redux, react-router-redux, redux-saga)
- Node.js (node, express, http, cors, compression, body-parser)
- Essentials (config, debug, babel, babel-cli)

[Changelog](CHANGELOG.md)

Installation

```bash
npm install -g create-js-app
# or
yarn global add create-js-app
```

Usage:

```bash
create-js-app --n my-crazy-app
```

Options
`--n` or `--name` - The name of your JS application. Defaults to `my-crazy-app`.
`--target` or `--t` - Target folder for your application. Defaults to current directory.
`--yn`  or `--yarn` - Runs a yarn install to setup your app. Enable this flag to have your work done for you or you can do this manually.
`--d` or `--debug` - Prints debug and verbose messages to the console
`--h` or `--help` - Prints the list of options

Once your app has been setup, navigate to your app folder (either the current folder or the specified target folder) and follow instructions to run your app below.

Setup

- Start the server

```bash
yarn run start-server
# or
npm run start-server
```

- Test the API by going to [http://localhost:9095/api/health](http://localhost:9095/api/health)

- Start the client

```bash
yarn run start
# or 
npm run start
```

For more information on create-react-app, refer to the [readme](./README-CREATE-REACT-APP.md)
