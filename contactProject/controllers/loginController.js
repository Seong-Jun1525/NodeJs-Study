const asyncHandler = require("express-async-handler")
const Admin = require("../models/userModel")
const bcrypt = require("bcrypt")

// @desc Get login page
// @route Get /
const getLogin = (req, res) => {
    res.render("home")
}

// @desc Login user
// @route POST /
const loginUser = asyncHandler(async (req, res) => {
    const {userId, userPw} = req.body

    if(userId === "admin" && userPw === "1234") {
        res.send("Login success")
    } else {
        res.send("Login failed")
    }
})

// @desc Register Page
// @route GET /register
const getRegister = asyncHandler(async (req, res) => {
    res.render("register")
})

// @desc Register User
// @route POST /register
const registerUser = asyncHandler(async (req, res) => {
    const {adminId, adminPw, adminPw2} = req.body
    if(adminPw === adminPw2) {
        const hashedPw = await bcrypt.hash(adminPw, 10)
        const admin = await Admin.create({adminId, adminPw: hashedPw})
        res.status(201).json({message: "Register successful", admin})
    } else {
        res.send("Register Failed")
    }
})

module.exports = {getRegister,registerUser,getLogin,loginUser}