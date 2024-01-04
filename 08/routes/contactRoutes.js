const express = require("express")
const router = express.Router() // router 객체 인스턴스 생성
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} = require("../controllers/contactController")

router
    .route("/")
    .get(getAllContacts)
    .post(createContact)

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact)

module.exports = router