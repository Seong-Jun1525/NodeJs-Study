function writeData(url, data) {
    const fs = require("fs")
    fs.appendFile(url, data, (err) => {
        if(err) console.log(err)
        console.log("appending to file")
    })
}

module.exports = writeData