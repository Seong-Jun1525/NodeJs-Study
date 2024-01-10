const express = require("express")
const cookieParser = require("cookie-parser")
const checkLogin = require("../middlewares/checkLogin")
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

router.use(cookieParser())

router
    .route("/")
    .get(checkLogin, getAllContacts)
router
    .route("/add")
    .get(checkLogin, addContactForm)
    .post(checkLogin, createContact)
router
    .route("/update/:id")
    .get(checkLogin, getContact)
    .put(checkLogin, updateContact)
router
    .route("/delete/:id")
    .get(checkLogin, confirmContact)
    .delete(checkLogin, deleteContact)

module.exports = router