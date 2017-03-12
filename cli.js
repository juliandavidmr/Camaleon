#!/usr/bin/env node

var udebug = require("./lib/udebug.lib");
var uhunt = require("uhunt-node");
var compile = require('./lib/compile')
const prog = require('caporal');

prog
  .version(require("./package.json").version)
  /**
   * Compile command
   */
  .command('compile', 'compile file java or cpp')
  .alias('c')
  .argument('<file>', 'Codigo fuente .cpp, .java')
  .action((args, options, logger) => {
    console.log("Compilando: ", args.file);
    var file = args.file;
    if (file.endsWith('.cpp')) {
      compile.cpp(file).then(_out => {
        if(_out) {
          console.log("Error:", _out);
        } else {
          console.log("Compilado");
        }
      }, err => {
        console.log("Error:", err);
      });
    } else if (file.endsWith('.java')) {

    } else {

    }
  })
  /**
   * test command
   */
  .command('test', 'Make the player walk')
  .alias('t')
  .argument('<file>', 'Codigo fuente .cpp, .java')
  .action((args, options, logger) => {
    console.log("Probando codigo: ", args)
  })
  /**
   * Describe un ejercicio
   */
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
  /**
   * Casos de pruebas
   */
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