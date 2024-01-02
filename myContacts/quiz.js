// 익스프레스를 사용해서 3000번 포트에 app 서버 만들기
const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.status(200).send("Welcome")
})

app.get("/about", (req, res) => {
    res.status(200).send("This is the ABOUT Page")
})

app.get("/users", (req, res) => {
    res.sendFile(__dirname + "/assets/users.html")
})

app.get("/square", (req, res) => {
    res.status(200).send("Square Page")
})

app.post("/users", (req, res) => {
    res.status(201).send("Create User")
})

app.get("/users/:userId", (req, res) => {
    res.status(200).send(`${req.params.userId} 님`)
})

app.get("/square/:squareId", (req, res) => {
    sId = req.params.squareId
    result = sId * sId
    res.status(200).send(`${sId}의 제곱은 ${result} 입니다.`)
})

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행 중`)
})