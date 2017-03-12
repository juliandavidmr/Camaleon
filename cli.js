#!/usr/bin/env node

const prog = require('caporal');

prog
  .version('1.0.0')
  // run command
  .command('run', 'Run file java or cpp')
  .alias('r')
  .argument('<file>', 'Codigo fuente .cpp, .java')
  .action((args, options, logger) => {
    console.log("Ejecuntando codigo: ", args)
    // logger.log("I'm walking !")
  })
  // test command
  .command('test', 'Make the player walk')
  .alias('t')
  .argument('<file>', 'Codigo fuente .cpp, .java')
  .action((args, options, logger) => {
    console.log("Probando codigo: ", args)
    // logger.log("I'm walking !")
  })

prog.parse(process.argv);