const asyncHandler = require("express-async-handler")
const User = require("../models/userModel") // DB모델 연결

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).send(users)
})

const createUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(!name) {
        return res.status(400).send("필수 값이 입력되지 않았습니다.")
    }
    const user = await User.create({name})
    res.status(201).send("Create Contacts")
})

const getUser = asyncHandler(async (req, res) => {
    const id = req.params.id
    const {name} = await User.findOne({name: id})
    res.status(200).send(`Hello ${name}`)
})

module.exports = {getAllUsers, createUser, getUser}