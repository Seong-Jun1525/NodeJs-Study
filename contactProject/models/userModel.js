const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // 데이터베이스에 자료를 추가, 수정한 시간이 자동으로 기록
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User