const path = require("path")
const fullPath = path.join("some", "work", "ex.txt")
console.log(fullPath)

console.log(`파일 절대 경로 : ${__filename}`)
const dir = path.dirname(__filename)
console.log(`파일 상대 경로 : ${dir}`)

const fn = path.basename(__filename)
const fn2 = path.basename(__filename, '.js')
console.log(fn)
console.log(fn2)

const ext = path.extname(__filename)
console.log(`파일의 확장자 : ${ext}`)
console.log(path.basename(__filename,ext))

const parsedPath = path.parse(__filename)
console.log(parsedPath)