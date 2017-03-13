var fs = require('fs');
var bash = require('./bash');
var compile = require('./compile');

/**
 * Run code only linux
 * @param {string} filename 
 * @param {string} dirinputfile 
 */
var cmd = function (filename, dirinputfile) {
  var sentence = `${filename} < ${dirinputfile}`;
  console.log("S: ", sentence);
  return sentence;
}

/**
 * @param {string} dirname
 * @param {string} inputs
 */
module.exports.cpp = function (dirname, inputs, index) {
  return new Promise((resolve, reject) => {    
    var dir = dirname + ".txt";    // Direccion donde va a quedar guardado el archivo de casos de prueba
    save(dir, inputs).then(() => { // Almacena las entradas 
      console.log(`File ${index}: '${dir}' generated.`);     
      compile.cpp(`${dirname}.cpp`).then(output_compile => {        
        console.log(`Compiled.`);
        bash(cmd(dirname.substring(0, dirname.length - 3), dir)).then(output_execute => { // TODO: Al parecer la entrada del arhivo aqui esta MAL.
          console.log("Executed: ", !!output_execute);
          console.log(output_execute);
        }, err => {
          return reject(err);
        });
      })
    })    
  });
}


/**
 * Save file
 * @param {string} dirname 
 * @param {string} content
 */
function save(dirname, content) {
  return new Promise((resolve, reject) => {
    // fs.writeFile("/tmp/test", "Hey there!", (err) => err ? reject(err) : resolve(true));
    fs.writeFile(dirname, content, (err) => err ? reject(err) : resolve(true));
  });
}