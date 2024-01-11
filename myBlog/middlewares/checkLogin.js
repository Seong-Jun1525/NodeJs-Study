const jwt = require("jsonwebtoken")
require("dotenv").config()
const jwtSecret = process.env.JWT_SECRET

// CheckLogin
const checkLogin = (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    // 쿠키정보 가져오기
    const token = req.cookies.token

    if(!token) {
        return res.redirect("/admin")
    }
    // 토큰이 있다면 토큰을 확인하고 사용자 정보를 요청에 추가하기
    try {
        const decoded = jwt.verify(token, jwtSecret) // 토큰해석하기
        req.userId = decoded.userId // 토큰의 사용자 ID를 요청에 추가하기
        next()
    } catch (err) {
        return res.redirect("/admin")
    }
}

module.exports = checkLogin