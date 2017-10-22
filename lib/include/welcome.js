import constants from './constants'

const printWelcome = () => {
  const WELCOME_MSG = `
  WELCOME TO CREATE JS APP!
  Version: ${constants.version}
  Author: ${constants.author}`
  
  console.log(WELCOME_MSG)
}

export default printWelcome
