const express = require("express")
const router = express.Router()
const mainLayout = "../views/layouts/main.ejs"
const Post = require("../models/Post")
const asynchandler = require("express-async-handler")

router.get(["/", "/home"], asynchandler(async (req, res) => {
        const locals = {
            title: "Home",
        }
        const data = await Post.find({}).sort({updatedAt: "desc", createAt:"desc"}) // 데이터베이스에 있는 데이터 모두 가져오기

        // index.ejs를 렌더링 하는데 mainLayout 레이아웃으로 감싸기
        res.render("index", {locals, data, layout: mainLayout})
    })
)

router.get(["/about"], (req, res) => {
    // about.ejs를 렌더링 하는데 mainLayout 레이아웃으로 감싸기
    res.render("about", {locals, layout: mainLayout})
})

// GET post/:id
// 게시물 상세보기
router
    .get("/post/:id", asynchandler(async (req, res) => {
        const data = await Post.findOne({_id: req.params.id}) // 데이터 1개 가져오기
        res.render("post", {data, layout: mainLayout})
    }))

// 임시 데이터 저장하기

// 추가한 것을 몽고DB 사이트에서 확인 후 지워야 한다
// 지우지 않으면 app을 재실행할 때마다 계속 추가된다

// Post.insertMany([
//     {
//         title: "제목1",
//         body: "test1"
//     },
//     {
//         title: "제목2",
//         body: "test2"
//     },
//     {
//         title: "제목3",
//         body: "test3"
//     },
//     {
//         title: "제목4",
//         body: "test4"
//     },
//     {
//         title: "제목5",
//         body: "test5"
//     },
//     {
//         title: "제목6",
//         body: "test6"
//     },
//     {
//         title: "제목7",
//         body: "test7"
//     },
//     {
//         title: "제목8",
//         body: "test8"
//     },
// ])

module.exports = router