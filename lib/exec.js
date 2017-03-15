var fs = require('fs');
var bash = require('./bash');
var compile = require('./compile');

/**
 * Run code only linux
 * @param {string} filename 
 * @param {string} dirinputfile 
 */
var cmd = function (filename, dirinputfile) {
  var sentence = `./${filename} < ${dirinputfile}`;
  console.log("S: ", sentence);
  return sentence;
}

/**
 * @param {string} dirname
 * @param {string} inputs
 * @param {Number} index 
 */
module.exports.cpp = function (dirname, inputs, index) {
  return new Promise((resolve, reject) => {    
    var dir = `${dirname}${index}.txt`;    // Direccion donde va a quedar guardado el archivo de casos de prueba
    save(dir, inputs).then(() => { // Almacena las entradas 
      console.log(`File cases ${index}: '${dir}' generated.`);

      var outname_compile = (dirname.substring(0, dirname.length - 4) + "" + index).trim().replace(" ", ""); // Creo que el reemplazo es innecesario
      compile.cpp(dirname, outname_compile).then(output_compile => {        
        console.log(`Compiled.`);
        var filename = dirname.substring(0, dirname.length - 4);
        var exc = cmd(filename, dir);       
        console.log("Comando de ejecucion: ", exc) 
        bash(exc).then(output_execute => { // TODO: Al parecer la entrada del arhivo aqui esta MAL.
          // console.log("Executed: ", !!output_execute);
          // console.log("Resultado de ejecucion:\n", output_execute);
          return resolve(output_execute);
        }).catch(err => {
          console.log("Falla en exec cpp: ", err)
          return reject(err);
        });
      })
    })
  });
}


/**
 * Save file
 * @param {string} dirname 
 * @param {string} content file
 */
function save(dirname, content) {
  return new Promise((resolve, reject) => {
    // fs.writeFile("/tmp/test", "Hey there!", (err) => err ? reject(err) : resolve(true));
    fs.writeFile(dirname, content, (err) => err ? reject(err) : resolve(true));
  });
}