const express = require("express")
const router = express.Router() // router 객체 인스턴스 생성
const {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm,
    confirmContact
} = require("../controllers/contactController")

router
    .route("/")
    .get(getAllContacts)
router
    .route("/add")
    .get(addContactForm)
    .post(createContact)
router
    .route("/update/:id")
    .get(getContact)
    .put(updateContact)
router
    .route("/delete/:id")
    .get(confirmContact)
    .delete(deleteContact)

module.exports = router