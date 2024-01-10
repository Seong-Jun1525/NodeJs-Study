const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")

require("dotenv").config()
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

// @desc Get login page
// @route Get /
const getLogin = (req, res) => {
    res.render("home")
}

// @desc Login user
// @route POST /
const loginUser = asyncHandler(async (req, res) => {
    const {userId, userPw} = req.body

    // if(userId === "admin" && userPw === "1234") {
    //     res.send("Login success")
    // } else {
    //     res.send("Login failed")
    // }

    const user = await User.findOne({userId}) // userId로 DB조회
    
    // 일치하는 사용자가 없을 때
    if(!user) {
        return res.status(401).json({message: "일치하는 사용자가 없습니다."})
    }

    // 입력된 비밀번호와 사용자의 비밀번호 비교
    const isMatch = await bcrypt.compare(userPw, user.userPw)

    // 사용자 ID를 기반으로 JWT 토큰생성
    const token = jwt.sign({id: user._id}, jwtSecret)
    // 생성된 토큰을 쿠키에 저장
    res.cookie("token", token, {httpOnly: true})

    // 로그인 성공하면 /contacts로 이동
    res.redirect("/contacts")
})

// @desc Register Page
// @route GET /register
const getRegister = asyncHandler(async (req, res) => {
    res.render("register")
})

// @desc Register User
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
    const {userId, userPw, userPw2} = req.body
    if(userPw === userPw2) {
        const hashedPw = await bcrypt.hash(userPw, 10)
        const user = await User.create({userId, userPw: hashedPw})
        res.status(201).json({message: "Register successful", user})
    } else {
        res.send("Register Failed")
    }
})

// @desc Logout
// @route GET /logout
const logout = (req, res) => {
    res.clearCookie("token")
    res.redirect("/")
}

module.exports = {getRegister,registerUser,getLogin,loginUser,logout}