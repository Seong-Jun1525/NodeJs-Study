const express = require("express")
const dbConnect = require("./config/dbConnect")
const methodOverride = require("method-override")
const app = express()
app.set("view engine", "ejs") // .ejs 파일을 템플릿 파일로 설정
app.set("views", "./views") // views 폴더를 템플릿 파일을 저장할 폴더로 설정

// 정적인 파일 연결
app.use(express.static("./public"))
// 가상경로 사용법
// app.use("static", express.static("public"))

app.use(methodOverride("_method"))

const port = 3000
dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/", require("./routes/loginRoutes")) // router 등록
app.use("/contacts", require("./routes/contactRoutes")) // router 등록

app.listen(port, () => {
    console.log(`${port} - start server`)
})