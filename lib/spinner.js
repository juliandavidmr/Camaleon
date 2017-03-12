const ora = require('ora');

/**
 * @param {string} msg message
 */
var spinner;

module.exports.start = function (msg) {
  spinner = ora(msg).start();
  spinner.color = 'yellow';
}

module.exports.stop = function () {
  spinner.stop();
}