import constants from './constants'
import { logForce } from './util'

const printWelcome = () => {
  const WELCOME_MSG = `
  WELCOME TO CREATE JS APP!
  Version: ${constants.version}
  Author: ${constants.author}`
  logForce(WELCOME_MSG)
}

export default printWelcome
