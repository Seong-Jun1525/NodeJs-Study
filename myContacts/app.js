const express = require("express") // express 패키지를 가져오기
const path = require("path")
const app = express() // express를 실행시켜 app이라는 서버를 만든다. app에서는 express의 모든 기능을 사용할 수 있다
const port = 3000 // port 번호는 3000

// 익스프레스에서 라우팅 형식
// app.method(path,handler)
// method: get, put, post, delete
// if(method === "GET" && url === "/") 이 부분이 아래처럼 변경 
app.get("/", (req, res) => { // 루트경로에서 get 요청을 하면 그 뒤 오는 콜백함수를 실행하라는 의미
    res.status(200) // 응답 상태 코드를 200으로 설정
    // res.send("Hello Node") // 응답객체 res의 send 함수를 사용하여 응답을 화면에 표시

    // 클라이언트로 보내는 res.send()
    // 문자열이나 객체, 배열 등 괄호 안의 내용을 클라이언트로 전송
    // Content-Type 헤더를 자동으로 만들고 내용을 JSON형식으로 변환하거나 일반 텍스트로 전송

    // => 메서드 체이닝
    // res.status(200).send("Hello Node")

    // JSON형식으로 변환하는 res.json()
    // res.json({message: "Hello Node"})
})

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
    // res.status(200).send("Contacts Page")
    res.sendFile(__dirname + "/assets/contacts.html")
    // preview를 클릭하면 페이지화면을 보여주고 raw html을 클릭하면 코드를 보여줌
})

// 연락처 생성
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts")
})

// 특정 연락처 가져오기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contact for ID: ${req.params.id}`)
})

// 특정 연락처 수정
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contact for ID: ${req.params.id}`)
})

// 특정 연락처 삭제
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contact for ID: ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`${port}번 포트에서 실행 중`)
})