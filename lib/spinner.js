const ora = require('ora');

/**
 * @param {string} msg message
 */
var spinner;

module.exports.start = function (msg) {
  spinner = ora(msg).start();
  spinner.color = 'green';
}

module.exports.stop = function () {
  spinner.stop();
}

module.exports.changeText = function (msg, time) {
  if (time) {
    setTimeout(function () {
      spinner.text = msg;
    }, time);
  } else {
    spinner.text = msg;
  }
}

/**
 * @param {string} msg message
 */
module.exports.stopSucceed = function (msg) {
  spinner.succeed(msg);
}

/**
 * @param {string} msg message
 */
module.exports.stopFail = function (msg) {
  spinner.fail(msg);
}