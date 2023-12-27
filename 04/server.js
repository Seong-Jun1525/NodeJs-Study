// 서버 만들기 - createServer([옵션], [콜백])
const http = require("http")
const fs = require("fs")
// const server = http.createServer((req, res) => {
//     console.log(req.method)

//     // 응답헤더 만들기 res.setHeader(이름, 값), res.writeHead(상태코드[, 상태 메시지] [, 헤더])
//     res.setHeader("Content-Type", "text/plain")
//     // 응답 본문 작성하기 res.write(내용[, 인코딩][, 콜백])
//     res.write("Hello NodeJS")
//     // res.end(내용[, 인코딩][, 콜백])
//     res.end()
// })

// html파일 연결
// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/html")
//     const readStream = fs.createReadStream(__dirname + "/index.html", "utf8")
//     readStream.pipe(res)
// })

// 라우팅
const server = http.createServer((req, res) => {
    const {method, url} = req
    res.setHeader("Content-Type", "text/plain")

    if(method === "GET" && url === "/home") {
        res.statusCode = 200
        res.end("HOME")
    } else if(method === "GET" && url === "/about") {
        res.statusCode = 200
        res.end("ABOUT")
    } else {
        res.statusCode = 404
        res.end("Not Found")
    }

})

// 서버 실행하기 - listen(포트[, 호스트][, 콜백])
server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행")
})