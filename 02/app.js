// // const {user1, user2} = require("./user")
// const user = require("./user")
// const greeting = require("./greeting")
// // console.log(greeting)
// // greeting.greeting(user1) // greeting은 {} 즉 객체를 반환 그래서 greeting.greeting으로 작성해야함
// // greeting.greeting(user2)
// greeting.greeting(user.user1)
// greeting.greeting(user.user2)
// greeting.greeting(user.user3)

// es모듈
import user from "./user.js"
import {bye} from "./greeting.js"

bye(user.user1)

// greeting.hi(user)