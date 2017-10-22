import { parseArguments } from './util'
import fs from 'fs'

const work = (args) => {
  console.log('args', args)
  const params = parseArguments(args)
  if (!params) {
    return
  }
  console.log('params', params)
  console.log(`
    Constructing your app ${params.name}...`
  )
}

export default work
