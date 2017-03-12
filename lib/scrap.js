const scrapeIt = require("scrape-it");
var axios = require("axios");

/**
 * Obtiene el listado de soluciones disponibles en udebug
 * {
 *    solutions[number, dataid, user, date, votes],
 *    title:string,
 *    problem:string,
 *    number:Number
 * }
 * Esta función no consulta las soluciones propuestas por los usuarios.
 * @param {string} id_excercise ID del ejercicio
 */
exports.getListSolutions = function (id_excercise) {
  return new Promise((resolve, reject) => {

    // Callback interface 
    scrapeIt("https://www.udebug.com/UVa/" + id_excercise, {
      // Fetch the solutions
      solutions: {
        listItem: ".odd, .even",
        data: {
          number: {
            selector: ".input_number"
          },

          dataid: {
            attr: "data-id",
            selector: "a",
            convert: x => parseInt(x)
          },

          user: {
            selector: "a",
            how: "html"
          },

          date: {
            selector: ".year-time",
            how: "html",
            convert: x => new Date(x)
          },

          votes: {
            selector: "span",
            how: "html",
            convert: x => parseInt(x)
          }
        }
      },

      // Fetch some other data from the page 
      title: "h1.problem-title",
      problem: {
        selector: "a.problem-statement",
        attr: "href"
      },
      number: {
        selector: "span.problem-no",
        how: "html",
        convert: x => parseInt(x)
      }
    }, (err, page) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(page);
      }
      // console.log(err || page);
    });
  });
}

/**
 * Obtiene las pruebas de salida de una solucion 
 * @param {Number} nid ID asignado a la solución
 */
exports.getSolution = function (nid) {
  return new Promise((resolve, reject) => {
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    var qs = require('qs');
    axios.post('https://www.udebug.com/get-selected-input', qs.stringify({
        'nid': nid
      }))
      .then(response => resolve(response.data))
      .catch((error) => reject(error));
  });
}

/**
 * Obtiene las soliciones con sus respectivas soluciones dadas por los usuarios
 * @param {string} id_excercise ID del ejercicio
 */
exports.get = function (id_excercise) {
  return new Promise((resolve, reject) => {
    if (!id_excercise) {
      return reject("Error: ID ejercicio no asignado")
    }
    this.getListSolutions(id_excercise).then(data => {
      var list_result = [];
      var count_elements = 0;

      data.solutions.forEach(function (item) {
        // console.log("NID: ", item.dataid)
        this.getSolution(item.dataid).then(out => {
          item.output = out;
          return item;
        }).then(res => {
          // console.log("Solucion", item);
          list_result.push(res);
          count_elements++;
          if (count_elements == data.solutions.length) {
            // console.log("Finalizado")
            return resolve(list_result);
          }
        })
      }, this);
      // console.log(data)
    });
  });
}

// Testing
/*
this.getSolution(809769).then(result => {
  console.log("Result: ", result)
});
*/

/*
this.get("100").then(data => {
  console.log("Soluciones: ", data)
});
*/