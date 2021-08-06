const express = require("express");
const Student = require('../../models/Student');
const Studentrouter = express.Router();

//bcrypt
const bcrypt = require("bcrypt");
//jsonwebtoken
const jwt = require("jsonwebtoken");
//validators
const {
  registerValidators,
  loginValidators,
  validator,
} = require("../../middlewares/express-validator");

//7-require isAuth
const StudentIsAuth = require("../../middlewares/StudentIsAuth");
const TeacherIsAuth = require("../../middlewares/TeacherIsAuth");
const AdminAuth = require("../../middlewares/AdminAuth");

//@route /api/students/register
//desc create new student
//access public
Studentrouter.post("/register", registerValidators(), validator, async (req, res) => {
  const { firstName, lastName, isTeacher, club, email, password } = req.body;
  try {
    //checking if student is already registered
    let student = await Student.findOne({email});
    if (student) {
      return res.status(400).json({ msg: "Student already exists" });
    }
    //create new student
    student = new Student(req.body);
    //create salt
    const salt = 10; //recommended value

    //hash the password
    const hashedPassword = await bcrypt.hash(password, salt);

    //replace password with hashed password
    student.password = hashedPassword;

    //sign student
    const payload = {
      id: student._id,
    };

    //generate the token
    const studentToken = await jwt.sign(payload, process.env.SECRET_TOKEN, 
      {
      //expiresIn: "1 day",
    });

    //save student
    await student.save();

    res.status(200).send({ msg: "Student created successfully",student,studentToken });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});

//@route /api/students/login
//desc sign in the student
//access public
Studentrouter.post("/studentlogin", loginValidators(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).json({ msg: "Bad credentials" });
    }

    //checking password
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Bad credentials" });
    }

    //sign student
    const payload = {
      id: student._id,
    };

    //generate the token
    const studentToken = await jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "1 day",
    });

    res.status(200).send({ msg: "Student logged successfully", student, studentToken });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

//@route /api/students/auth
//desc getting authetified
//access private
Studentrouter.get("/authstudent", StudentIsAuth, (req, res) => {
  res.status(200).send({ student: req.student });
});
//Get all the students to display them
//access admin + teacher
Studentrouter.get("/all", async (req, res) => {
  try {
    let StudentsData = await Student.find()
    res
      .status(200)
      .send({ msg: "List of all the students", StudentsData });
    if (!StudentsData) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Edit a student profile
//access private + admin
Studentrouter.put("/:id", async (req, res) => {
  try {
    const StudentID = req.params.id;
        const update = req.body;
    const salt = 10; //recommended value

    if (req.body.password) {
      //hash the password
      const hashedUpdatedPassword = await bcrypt.hash(req.body.password, salt);
      //replace password with hashed password
      update.password = hashedUpdatedPassword;
    }
    let result = await Student.findByIdAndUpdate(StudentID, update, {
      new: true,
    });
    res
      .status(200)
      .send({ msg: "student account updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "Error", err });
  }
});
//Delete a student profile
//access private + admin
Studentrouter.delete("/:id", function (req, res) {
  const removedID = req.params.id;
  Student.findByIdAndRemove(removedID)
    .then((result) => res.status(200).send({ msg: "Student deleted successfully",result}))
    .catch((err) => res.status(500).send({ msg: "server error", err }));
});

module.exports = Studentrouter;
