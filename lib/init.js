#! /usr/bin/env node
import welcome from './include/welcome'
import work from './include/work'
import end from './include/end'

welcome()
work(process.argv)
end()
