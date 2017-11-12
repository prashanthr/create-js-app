import { describe, it } from 'mocha'
import chai from 'chai'
import {
  getSourcePath,
  getTargetPath,
  copyFiles,
  updatePackageJson,
  yarnInstall,
  setDebugFlag,
  logForce
 } from '../lib/include/util'
import _debug from 'debug'

const debug = _debug('create-js-app-test')
const should = chai.should()

describe('create-js-app test suite', function () {
  it('get-source-path', function () {
    debug('source-path', getSourcePath())
    return
  })
})

