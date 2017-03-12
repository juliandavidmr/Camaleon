#!/usr/bin/env node

var udebug = require("./lib/udebug.lib");
var uhunt = require("uhunt-node");
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
  .command('desc', 'Describe un ejercicio')
  .alias('d')
  .argument('<number>', 'Numero del ejercicio')
  .action((args, options, logger) => {
    console.log("Descripcion del ejercicio: ", args.number)
    uhunt.byNum(args.number).then(data => {
      console.log(data)
    })
    // logger.log("I'm walking !")
  })
  .command('cases', 'Casos de prueba')
  .alias('c')
  .argument('<number>', 'Numero del ejercicio')
  .action((args, options, logger) => {
    console.log("Casos de prueba del ejercicio: ", args.number)
    udebug.get(args.number).then(data => {
      console.log(data)
    })
    // logger.log("I'm walking !")
  })

prog.parse(process.argv);