// // // const {user1, user2} = require("./user")
// // const user = require("./user")
// // const hello = require("./hello")
// // // console.log(hello)
// // // hello.hello(user1) // hello은 {} 즉 객체를 반환 그래서 hello.hello으로 작성해야함
// // // hello.hello(user2)
// // hello.hello(user.user1)
// // hello.hello(user.user2)
// // hello.hello(user.user3)

// // es모듈
// import user from "./user.js"
// import {bye} from "./hello.js"

// bye(user.user1)

// // hello.hi(user)

// const user = require("./user")
// const {user1, user2, user3} = require("./user")
const users = require("./user")
const hello = require("./hello")

hello(users.user1)
hello(users.user2)
hello(users.user3)