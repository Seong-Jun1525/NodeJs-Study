const express = require("express")
const dbConnect = require("./config/dbConnect")
const app = express()
const port = 3000
dbConnect()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/contacts", require("./routes/contactRoutes")) // router 등록

app.listen(port, () => {
    console.log(`${port} - start server`)
})