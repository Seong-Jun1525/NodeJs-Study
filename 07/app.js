const express = require("express")
const errorHandler = require("./middlewares/errorHandler")
const app = express()
// const router = express.Router() // router 객체 인스턴스 생성
// router.METHOD (METHOD : get, post, ... 등)
const port = 3000

// logger 미들웨어 선언
// const logger = (req, res, next) => {
//     console.log("User Logged")
//     next()
// }
// app.use(logger)
// 위 코드가 실행 후 다음 미들웨어인 app.get("/", (req, res) => {})으로
// 넘어가기 때문에 User Logged가 출력된 후
// 응답화면에 Hello Node - 07이 보여짐

const requestTime = (req, res, next) => {
    let today = new Date()
    let now = today.toLocaleTimeString()
    req.requestTime = now
    next()
}
app.use(requestTime)


// 이런식으로 했을 때의 문제점은 코드가 길어진다
// 이것을 해결하기 위해 기능별로 묶어서
// 라우트 코드를 외부파일로 연결하는 방법이 있다
app.get("/", (req, res) => {
    // res.status(200).send("Hello Node - 07")
    const responseText = `Hello Node - 07\n요청시간: ${req.requestTime}`
    res.set("Content-Type", "text/plain")
    res.send(responseText)
})

// 에러 생성
// app.get("/test", (req, res, next) => {
//     const error = new Error("테스트용 에러")
//     error.status = 401
//     next(error)
// })

// router
//     .route("/contacts")
//     .get((req, res) => {
//         res.status(200).send("Contacts Page")
//     })
//     .post((req, res) => {
//         res.status(201).send("Create Contacts")
//     })

// router
//     .route("/contacts/:id")
//     .get((req, res) => {
//         res.status(200).send(`View Contact for ID: ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.status(200).send(`Update Contact for ID: ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         res.status(200).send(`Delete Contact for ID: ${req.params.id}`)
//     })

// app.use(logger)

// 아래 두 줄의 코드가 없으면 undefined가 뜸
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/contacts", require("./routes/contactRoutes")) // router 등록
// app.use(errorHandler)

app.listen(port, () => {
    console.log(`${port} - start server`)
})