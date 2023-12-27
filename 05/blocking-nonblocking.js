// blocking
const fs = require("fs")
const data = fs.readFileSync("./03/example.txt") // 블로킹
console.log(data) // 파일읽기 끝날때까지 대기
console.log("The End")
console.log("--------------------------")

// non-blocking
const fs1 = require("fs")
fs1.readFile("./03/example.txt", "utf8", (err, data) => {
    if(err) console.log(err)
    console.log(data)
})
console.log("The End")