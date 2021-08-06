//1-require jsonwebtoken
const jwt = require('jsonwebtoken')

//2-require student schema 
const student = require('../models/Student')

const StudentIsAuth = async (req, res, next) => {
    try {
        const studentToken = req.headers['authStudentToken']
        //checking valid token
        if (!studentToken) {
            return res.status(400).json({msg: "Invalid token"})
        }

        //decode token
        const decoded = await jwt.verify(studentToken, process.env.SECRET_TOKEN)

        //find the student
        const student = await Student.findById(decoded.id)

        if (!student) {
            return res.status(403).send({msg: "authorization forbidden"})
        }

        req.student = student
        next()
    } catch (error) {
        return res.status(500).send({msg: "Invalid token"})
    }
}

module.exports = StudentIsAuth