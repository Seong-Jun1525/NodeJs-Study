const express = require("express") // express 패키지를 가져오기
const app = express() // express를 실행시켜 app이라는 서버를 만든다. app에서는 express의 모든 기능을 사용할 수 있다
const port = 3000 // port 번호는 3000

app.get("/", (req, res) => { // 루트경로에서 get 요청을 하면 그 뒤 오는 콜백함수를 실행하라는 의미
    res.status(200) // 응답 상태 코드를 200으로 설정
    res.send("Hello Node") // 응답객체 res의 send 함수를 사용하여 응답을 화면에 표시
})

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행 중`)
})