/**
 * @param {string} cmd Excecute cmd in the bash or cmd
 */
module.exports = function (cmd) {
  return new Promise((resolve, reject) => {
    var exec = require('child_process').exec;

    exec(cmd, function (error, stdout, stderr) {
      if (error) {
        return reject({error, stderr});
      }
      // console.log(stdout)
      return resolve(stdout); // command output is in stdout      
    });
  });
}