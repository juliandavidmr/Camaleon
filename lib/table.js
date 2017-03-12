var Table = require('cli-table');

var style_tables = {
  'padding-left': 1,
  'padding-right': 1,
  head: ['green'],
  border: ['grey'],
  compact: false
}

module.exports.show = function (headers, rows) {
  var table = new Table({
    head: headers,
    style: style_tables
  });

  table.push(
    rows
  );

  console.log(table.toString());
}

/**
 * Show table with muti rows
 * @param {{}} headers   Header table
 * @param {[]} rows      Rows table
 * @param {[]} colwidths Colum widths
 */
module.exports.multi = function (headers, rows, colwidths) {
  var table = new Table({
    head: headers,
    style: style_tables,
    colWidths: colwidths
  });

  rows.map(item => {
    table.push(
      item
    );
  })

  console.log(table.toString());
}