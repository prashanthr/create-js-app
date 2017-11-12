import { version, author } from './constants'
import { logForce } from './util'

const printWelcome = () => {
  const WELCOME_MSG = `
  WELCOME TO CREATE JS APP
  Version: ${version}
  Author: ${author}
  `
  logForce(WELCOME_MSG)
}

export default printWelcome
