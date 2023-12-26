// 01
const fs = require("fs")
if(fs.existsSync("./03/mine")) {
    console.log("파일이 있습니다.")
} else {
    fs.mkdir("./03/mine", (err) => {
        if(err) console.log(err)
        console.log("만들었습니다.")
    })
}

// 02
const writeData = require("./file.js")
const data = 'This is sample of mine'
writeData("./myData.txt", data)

// 03
const fs2 = require("fs")
fs2.readdir("./03/", (err, files) => {
    let count = 0
    if(err) console.log(err.name)
    else {
        for(f of files) {
            // console.log(f.split("."))
            [fName, fExtension] = f.split(".")
            // console.log(fName, fExtension)
            if(fExtension === "txt") {
                count += 1
            }
        }
        console.log(`txt 확장자를 가진 파일의 수 : ${count}`)
    }
})