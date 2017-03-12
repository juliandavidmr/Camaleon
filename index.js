var uhunt = require("./lib/uhunt.lib");

uhunt.get("161").then((data) => {
    console.log(data);
}, error => {
    console.log(error);
})