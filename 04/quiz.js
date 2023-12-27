const http = require("http")
// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/plain")
//     res.write("Hello World")
//     res.end()
// })

const server = http.createServer((req, res) => {
    const {method, url} = req
    if(method === "GET" && url === "/home") {
        res.statusCode = 200
        res.end("WELCOME HOME")
    }
    else if(method === "GET" && url === "/about") {
        res.statusCode = 200
        res.end("ABOUT US")
    }
    else {
        res.statusCode = 404
        res.end("NOT FOUND")
    }
})

server.listen(8080, () => {
    console.log("8080번 포트에서 서버 실행")
})