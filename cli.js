#!/usr/bin/env node

var udebug = require("./lib/udebug.lib");
var uhunt = require("uhunt-node");
var compile = require('./lib/compile');
var table = require("./lib/table")
const prog = require('caporal');
var spinner = require('./lib/spinner');

prog
  .version(require("./package.json").version)
  /**
   * Compile command
   */
  .command('compile', 'Compile file java or cpp')
  .alias('c')
  .argument('<file>', 'Codigo fuente .cpp, .java')
  .action((args, options, logger) => {
    spinner.start("Compiling source code " + args.file);
    var file = args.file;
    if (file.endsWith('.cpp')) { // Compile cpp

      compile.cpp(file).then(_out => {
          spinner.stop();
          console.log(_out ? _out : 'Compilado')
        },
        err => console.log("Error:", err));

    } else if (file.endsWith('.java')) { // compile java

      compile.java(file).then(_out => {
          spinner.stop();
          console.log(_out ? _out : 'Compilado')
        },
        err => {
          spinner.stop();
          console.log("Error:", err)
        });
    } else {
      spinner.stop();
      console.log("Error", args.file, " => No aceptado")
    }
  })
  /**
   * test command
   */
  .command('test', 'test source code java or cpp')
  .alias('t')
  .argument('<file>', 'Codigo fuente *.cpp o *.java')
  .action((args, options, logger) => {
    console.log("Probando codigo: ", args)
  })
  /**
   * Describe un ejercicio
   */
  .command('desc', 'Describe exercise')
  .alias('d')
  .argument('<number>', 'Number of exercise')
  .action((args, options, logger) => {
    spinner.start("Loading exercise description " + args.number);    
    // console.log("Descripcion del ejercicio: ", args.number)
    uhunt.byNum(args.number).then(data => {
      spinner.stop();
      // console.log(data);
      table.show(['pid', 'number', 'title', 'limit', 'status'], [data.pid, data.num, data.title, data.rtl, data.status])
    })
  })
  /**
   * Casos de pruebas
   */
  .command('cases', 'Casos de prueba')
  .alias('cs')
  .argument('<number>', 'Number of exercise')
  .action((args, options, logger) => {
    spinner.start("Loading test cases of the exercise " + args.number);
    udebug.get(args.number).then(data => {
      spinner.stop();

      var test_cases = [];
      data.map((item, index) => {
        // test_cases.push(item.output.input_value);
        console.log("-----------Start case-----------")
        table.show(['#', 'Number', 'DataID', 'User', 'Date', 'Votes'], [(index + 1), item.number, item.dataid, item.user, item.date, item.votes])
        console.log("Case ", (index + 1), " by ", item.user, ":");
        console.log(item.output.input_value)
        console.log("------------End case------------")
      })
      // console.log(test_cases)
    });
  })
  /**
   * Consultar los envios de un usuario
   */
  .command('submissions', 'Submissions by user')
  .alias('sb')
  .argument('<number>', 'Numero de usuario: ID User')
  .action((args, options, logger) => {
    spinner.start("Loading submissions by " + args.number);
    uhunt.getUserSubmission(args.number).then(submiss => {
      spinner.stop();

      // console.log(submiss);
      table.show(['name', 'user name'], [
        submiss.name,
        submiss.uname
      ]);

      var subs = [];
      submiss.subs.map((item) => subs.push([item.reference, item.problem, item.result, item.time, item.code, item.date]));
      table.multi(['Reference', 'problem', 'result', 'time', 'code', 'date'], subs, [11, 9, 21, 8, 8, 41]);
    }, err => {
      console.log("Error: ", submiss);
    })
    // logger.log("I'm walking !")
  })
  /**
   * Consultar los envios de un usuario
   */
  .command('solutions', 'Casos de prueba')
  .alias('ss')
  .argument('<number>', 'Numero de usuario: ID User')
  .action((args, options, logger) => {
    // logger.log("I'm walking !")
  })

prog.parse(process.argv);