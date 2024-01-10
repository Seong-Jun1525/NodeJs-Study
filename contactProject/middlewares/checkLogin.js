const jwt = require("jsonwebtoken")
require("dotenv").config()
const jwtSecret = process.env.JWT_SECRET

const checkLogin = async (req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    // no-cache : 브라우저에서 캐시를 사용하지 않고 서버에서 응답을 매번 다시 받아야 함
    // no-store : 서버의 응답을 캐시에 저장하지 않음
    // must-revalidate : 만일 캐시에 있는 정보를 사용하더라도 반드시 서버에 다시 확인해야 함

    // 요청에 포함된 쿠키에서 토큰값 가져오기
    const token = req.cookies.token
    if(!token) {
        return res.redirect("/")
    }

    try {
        const decoded = jwt.verify(token, jwtSecret) // 토큰 해석
        req.userId = decoded.userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "로그인이 필요합니다." })
    }
}

module.exports = checkLogin