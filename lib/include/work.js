import { parseArguments, copyFiles } from './util'

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
  console.log(`Cloning into `)
  copyFiles(
    params.sourceDir,
    params.targetDir
  )

}

export default work
