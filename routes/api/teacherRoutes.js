const express = require("express");
const Teacher = require("../../models/Teacher");
const teacherRouter = express.Router();

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
const TeacherIsAuth = require("../../middlewares/TeacherIsAuth");
const AdminAuth = require("../../middlewares/AdminAuth");

//@route /api/teachers/register
//desc create new teacher
//access teachers
teacherRouter.post(
  "/register",
  registerValidators(),
  validator,
  async (req, res) => {
    const { firstName, lastName, isTeacher, club, email, password } = req.body;
    try {
      //checking if teacher is already registered
      let teacher = await Teacher.findOne({ email });
      if (teacher) {
        return res.status(400).json({ msg: "Teacher already exists" });
      }
      //create new teacher
      teacher = new Teacher(req.body);
      //create salt
      const salt = 10; //recommended value

      //hash the password
      const hashedPassword = await bcrypt.hash(password, salt);

      //replace password with hashed password
      teacher.password = hashedPassword;

      //sign teacher
      const payload = {
        id: teacher._id,
        role:teacher.role
      };

      //generate the token
      const teacherToken = await jwt.sign(
        payload,
        process.env.TEACHER_SECRET_TOKEN,
        {
          //expiresIn: "1 day",
        }
      );

      //save teacher
      await teacher.save();

      res
        .status(200)
        .send({ msg: "Teacher created successfully", teacher, teacherToken });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  }
);

//@route /api/teachers/login
//desc sign in the teacher
//access public
teacherRouter.post("/login", loginValidators(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    //test credentials
    // if (!email || !password) {
    //     return res.status(400).json({msg: "Please enter your credentials"})
    // }

    //checking if teacher exists
    let teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ msg: "Bad credentials" });
    }

    //checking password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Bad credentials" });
    }

    //sign teacher
    const payload = {
      id: teacher._id,
      role:teacher.role
    };

    //generate the token
    const teacherToken = await jwt.sign(
      payload,
      process.env.TEACHER_SECRET_TOKEN,
      {
        expiresIn: "1 day",
      }
    );

    res
      .status(200)
      .send({ msg: "Teacher logged successfully", teacher, teacherToken });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});

//@route /api/teachers/auth
//desc getting authetified
//access private
teacherRouter.get("/authteacher", TeacherIsAuth, (req, res) => {
  res.status(200).send({ teacher: req.teacher });
});

//Get all the teachers to display them
//access admin
teacherRouter.get("/all",async (req, res) => {
  try {
    let TeachersData = await Teacher.find();
    res.status(200).send({ msg: "List of all the teachers", TeachersData});
    if (!TeachersData) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});/*
teacherRouter.get("/all", AdminAuth, (req, res) => {
  let TeachersData = Teacher.find();
  res.status(200).send({ TeachersData:TeachersData });
});*/
//Edit a teacher profile
//access private + admin
teacherRouter.put("/:id", async (req, res) => {
  try {
    const teacherID = req.params.id;
    const update = req.body;
    const salt = 10; //recommended value

    if (req.body.password) {
      //hash the password
      const hashedUpdatedPassword = await bcrypt.hash(req.body.password, salt);
      //replace password with hashed password
      update.password = hashedUpdatedPassword;
    }
    let result = await Teacher.findByIdAndUpdate(teacherID, update, {
      new: true,
    });
    res
      .status(200)
      .send({ msg: "teacher account updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
//Delete a teacher profile
//access private + admin
teacherRouter.delete("/:id", function (req, res) {
  const removedID = req.params.id;
  Teacher.findByIdAndRemove(removedID)
    .then((result) =>
      res
        .status(200)
        .send({ msg: "teacher account deleted successfully", result })
    )
    .catch((err) => res.status(500).send({ msg: "server error", err }));
});


teacherRouter.get("/:id", async (req, res) => {
  try {
    const findteacherID = req.params.id;
    let foundTeacher = await Teacher.findById(findteacherID)
    res
      .status(200)
      .send({ msg: "Found", foundTeacher });
    if (!foundTeacher) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});

module.exports = teacherRouter;
