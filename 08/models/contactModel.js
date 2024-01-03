const mongoose = require("mongoose")
const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String, // 속성 값의 유형
            required: true // 필수 데이터
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
            required: [true, "전화번호는 꼭 기입해주세요"] // 필수속성&오류메시지 지정
        }
    },
    {
        timestamps: true // 데이터베이스에 자료를 추가, 수정한 시간이 자동으로 기록
    }
) // 몽고DB의 컬렉션에 저장할 데이터 구조와 유효성 검사규칙을 지정

// const Contact = mongoose.model("Contact", contactSchema)
// module.exports = Contact
module.exports = mongoose.model("Contact", contactSchema)