const fs = require("fs").promises
fs.readdir("./05")
    .then(result => console.log(result))
    .catch(err => console.log(err))