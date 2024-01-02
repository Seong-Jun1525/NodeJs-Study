const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.status(200).send("quiz")
})

app.get("/users", (req, res) => {
    const users = [
        {id: 1, name: "Kim"},
        {id: 2, name: "Lim"},
        {id: 3, name: "Jun"}
    ]
    const json = JSON.stringify(users)
    res.status(200).send(json)
})

// 아래 두 줄의 코드가 없으면 undefined가 뜸
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/about", require("./routes/aboutRoutes"))

app.listen(port, () => {
    console.log(`${port}번에서 quiz 서버 실행중`)
})