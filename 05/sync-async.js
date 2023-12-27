// 동기처리
console.log("first")
console.log("second")
console.log("third")
console.log("--------------------------")
// 비동기 처리
console.log("first")
// setTimeout(() => {
//     console.log("second")
// }, 3000)
setTimeout(() => {
    console.log("second-2")
}, 0)
console.log("third")

// 노드의 비동기 패턴
// 노드의 동기
const fs = require("fs")
// let files = fs.readdirSync("./05")
// console.log(files)
// 비동기
fs.readdir("./05", (err, files) => {
    if(err) console.log(err)
    console.log(files)
})

console.log("Code is done")