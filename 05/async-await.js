const fs = require("fs").promises
async function readDirAsync() {
    try {
        const files = await fs.readdir("./05")
        console.log(files)
    } catch (error) {
        console.error(error)
    }
}

readDirAsync()