console.log("-------------------------")
const path = require("path")
const fullPath = path.join("some", "work", "ex.txt")
console.log(fullPath)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
console.log(`파일 절대 경로 : ${__filename}`)
const dir = path.dirname(__filename)
console.log(`파일 상대 경로 : ${dir}`)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fn = path.basename(__filename)
const fn2 = path.basename(__filename, '.js')
console.log(fn)
console.log(fn2)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const ext = path.extname(__filename)
console.log(`파일의 확장자 : ${ext}`)
console.log(path.basename(__filename,ext))
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const parsedPath = path.parse(__filename)
console.log(parsedPath)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs = require("fs")
let files = fs.readdirSync("./")
console.log(files)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs2 = require("fs") // fs모듈 가져오기
fs2.readdir("./", (err, files) => {
    if(err) {
        console.log(err)
    }
    console.log(files)
})
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs3 = require("fs")
const data = fs3.readFileSync("./03/example.txt")
const data2 = fs3.readFileSync("./03/example.txt", "utf8")
console.log(data)
console.log(data2)
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs4 = require("fs")
fs4.readFile("./03/example.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    console.log(data)
})
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs5 = require("fs")
const data3 = fs5.readFileSync("./03/example.txt", "utf8")
if(fs5.existsSync("./03/test.txt")) {
    console.log("file already exist")
}
else {
    fs5.writeFileSync("./03/test.txt", data3)
    console.log("test.txt : " + fs5.readFileSync("./03/test.txt", "utf8"))
}

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs6 = require("fs")
fs6.readFile("./03/example.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    fs6.writeFile("./03/test2.txt", data, (err) => {
        if(err) console.log(err)
        console.log("text2.txt is saved")
    })
})
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs7 = require("fs")
let content = `
============================================
새로운 내용 추가
============================================
`
fs7.writeFileSync("./03/test.txt", content, {flag: "a"})
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs8 = require("fs")
fs8.appendFile("./03/test.txt", "\n\n새로운 내용 추가\n\n", (err) => {
    if(err) console.log(err)
    console.log("appending to file")
})
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs9 = require("fs")
if(!fs9.existsSync("./03/text.txt")) console.log("파일이 없습니다.")
else fs.unlink("./03/text.txt", () => console.log("파일을 삭제했습니다."))
console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs10 = require("fs")
if(fs10.existsSync("./test")) {
    // test 디렉터리가 있다면
    console.log("해당 디렉터리는 존재합니다.")
} else {
    fs10.mkdir("./test", (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 만들었습니다.")
    })
}

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs12 = require("fs")
if(fs12.existsSync("./test2/test3/test4")) {
    // test 디렉터리가 있다면
    console.log("해당 디렉터리는 존재합니다.")
} else {
    fs12.mkdir("./test2/test3/test4", {recursive: true}, (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 만들었습니다.")
    })
}

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs11 = require("fs")
if(!fs11.existsSync("./test")) {
    // test 디렉터리가 없다면
    console.log("해당 디렉터리는 존재하지 않습니다.")
} else {
    fs11.rmdir("./test", (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 삭제했습니다.")
    })
}

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs13 = require("fs")
if(!fs13.existsSync("./test2")) {
    // test 디렉터리가 없다면
    console.log("해당 디렉터리는 존재하지 않습니다.")
} else {
    fs13.rm("./test2", {recursive: true}, (err) => {
        if(err) console.log(err)
        console.log("해당 디렉터리를 삭제했습니다.")
    })
}

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs14 = require("fs")
const readStream = fs14.createReadStream("./03/test2.txt")
readStream.on("data", (chunk) => {
    console.log("new chunk received")
    console.log(chunk)
})
readStream.on("end", () => {
    console.log("finished reading data")
})
readStream.on("error", (err) => {
    console.log(`err name: ${err.name}`)
})

console.log("-------------------------")

console.log("")

console.log("-------------------------")
const fs15 = require("fs")
const readStream2 = fs15.createReadStream("./03/example.txt")
const writeStream = fs15.createWriteStream("./03/write.txt")

// pipe 함수를 사용하지 않았을 때
// readStream2.on("data", (chunk) => {
//     console.log("new chunk received")
//     writeStream.write(chunk)
// })

// pipe 함수를 사용했을 때
readStream2.pipe(writeStream)

console.log("-------------------------")

console.log("")