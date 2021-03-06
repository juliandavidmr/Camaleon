'use strict';

var bash = require("./bash");
var udebug = require("./udebug.lib");
var compile = require("./compile");
var exec = require('./exec');

const rgx_name_file = new RegExp(/(\/?.*\/)?((.*).java|(.*).cpp|(.*).c)/); // Get dirname and name 
const rgx_xtract_number = new RegExp(/^([0-9]{3,})$/); // Extract number exercise
const rgx_without_extension = new RegExp(/(.*).java|(.*).cpp|(.*).c/);

/**
 * @param {string} file_name dirname source code to test
 */
module.exports.test = async function (file_name, number_exercise) {
  var file = file_name;
  return new Promise((resolve, reject) => {
    if (!rgx_name_file.test(file_name)) {
      return reject("File name is invalid");
    }

    var groups = rgx_name_file.exec(file_name);
    var without_ext = rgx_without_extension.exec(file_name)[0]; // URL without extension for execute

    // console.log("groups:", groups);

    if (!number_exercise) { // Si no se ha ingresado un number_exercise se procede a sacarlo del file_name      
      number_exercise = groups[4];
      // console.log("Exec: ", groups);
    }
    if (!(rgx_xtract_number.test(number_exercise))) { // Validate number_exercise of 3 digits
      return reject("Could not find exercise number");
    }

    if (file.endsWith(".java")) {

    } else if (file.endsWith(".cpp")) {
      udebug.get(number_exercise).then(cases => {
        // console.log(cases);
        for (var i = 0; i < cases.length; i++) {
          var item = cases[i];
          console.log("\nTesting case", (i + 1));

          var r = exec.cpp(without_ext, item.output.input_value, i);

          r.then(res => {
            console.log("\nSalida: ", res)
          })
        }
      });
    } else if (file.endsWith(".c")) {

    } else {
      return reject("Extension file invalid");
    }
  });
}