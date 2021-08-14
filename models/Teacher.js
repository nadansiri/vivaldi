const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "teacher"
      },
    club:{
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatarUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqI4txTRkj4_pCfr3NlNdbCbLYgX-nqjMX8wHEfx_A6Q8luaudlecd84nMDGZ1a4nwA0&usqp=CAU",
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = Teacher = mongoose.model('Teacher', teacherSchema)