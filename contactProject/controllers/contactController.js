const asyncHandler = require("express-async-handler") // npm install express-async-handler
const Contact = require("../models/contactModel") // DB모델 연결
// const path = require("path")
// @desc 함수설명
// @route 요청방식과 URL

// @desc Get all contacts
// @route GET /contacts
// const getAllContacts = async (req, res) => { // 비동기 처리
//     try {
//         res.status(200).send("Contacts Page")
//     } catch (error) {
//         res.send(error.message)
//     }
// }

// => 위의 코드 express-async-handler를 사용하여 수정
const getAllContacts = asyncHandler(async (req, res) => { // 비동기 처리
    // DB 연락처 가져오기
    const contacts = await Contact.find()
    // const filePath = path.join(__dirname, "../pages", "getAllContacts.html") // 정적인 파일 연결 삭제
    // res.sendFile(filePath)
    // const users = [
    //     {name: "Lim", email: "asdasd@naver.com", phone: "010-1234-1234"},
    //     {name: "Seong", email: "zxczxc@naver.com", phone: "010-1234-1234"},
    //     {name: "Jun", email: "qweqwe@naver.com", phone: "010-1234-1234"}
    // ]

    // res.render("getAllContacts", {heading: "User List", users: users}) // views 폴더에 있는 getAllContacts.ejs 파일 연결
    

    res.render("index", {contacts: contacts})
})

// @desc View add contact form
// @route GET /contacts/add
const addContactForm = (req, res) => {
    res.render("add")
}

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone) {
        return res.status(400).send("필수 값이 입력되지 않았습니다.")
    }
    const contact = await Contact.create({name, email, phone})
    // res.status(201).send("Create Contacts")
    res.redirect("/contacts")
})

// @desc Get a contact
// @route Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    // res.status(200).send(contact.name)
    res.render("update", {contact: contact})
})

// @desc Update a contact
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req, res) => {
    // 특정조건에 맞는 연락처 가져오기
    const id = req.params.id
    const {name, email, phone} = req.body
    // const contact = await Contact.findById(id)
    // if(!contact) {
    //     res.status(404)
    //     throw new Error("Contact not found")
    // }

    // contact.name = name
    // contact.email = email
    // contact.phone = phone

    // contact.save() // findById()를 사용할 경우 save()를 꼭 해줘야 한다

    // res.status(200).json(contact)

    // findByIdAndUpdate() 사용
    const updateContact = await Contact.findByIdAndUpdate(
        id,
        {name, email, phone},
        {new: true}
    )
    // res.status(200).send(updateContact)
    res.redirect("/contacts")
})

// @desc Delete a contact
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
    // const contact = await Contact.findById(req.params.id)
    // if(!contact) {
    //     res.status(404)
    //     throw new Error("Contact not found")
    // }

    // await Contact.deleteOne()
    // res.status(200).send(`Delete Contact for ID : ${req.params.id}`)

    const id = req.params.id
    // const contact = await Contact.findByIdAndDelete(id)
    // const contact = await Contact.findById(id)
    await Contact.findByIdAndDelete(id)
    // res.status(200).send(contact)
    res.redirect("/contacts")
    // res.render("delete", {contact: contact})
})

const confirmContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    res.render("delete", {contact: contact})
})

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact, addContactForm, confirmContact}