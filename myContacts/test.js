const http = require("http") // http 모듈 가져오기
const server = http.createServer((req, res) => {
    // console.log("request received")
    console.log("요청발생")
})
server.listen(3000, () => { // 서버를 3000번 포트에서 실행
    // console.log("server start")
    console.log("서버시작")
})