const asyncHandler = require("express-async-handler") // npm install express-async-handler
const Contact = require("../models/contactModel") // DB모델 연결
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
    res.status(200).send(contacts)
})

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name, email, phone} = req.body
    if(!name || !email || !phone) {
        return res.status(400).send("필수 값이 입력되지 않았습니다.")
    }
    const contact = await Contact.create({name, email, phone})
    res.status(201).send("Create Contacts")
})

// @desc Get a contact
// @route Get /contacts/:id
const getContact = asyncHandler(async (req, res) => {
    const name = req.params.id
    const contact = await Contact.findOne({name: name})
    res.status(200).send(contact)
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
    res.status(200).send(updateContact)
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
    const contact = await Contact.findByIdAndDelete(id)
    res.status(200).send(contact)
})

module.exports = {getAllContacts, createContact, getContact, updateContact, deleteContact}