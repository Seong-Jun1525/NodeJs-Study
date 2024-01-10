require("dotenv").config() // .env에 있는 변수 가져오기
const express = require("express")

const app = express()
const port = process.env.PORT || 3000 // .env에 PORT가 없으면 3000번 포트사용

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log(`${port}번에서 서버 실행중`)
})