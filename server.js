console.clear();
//
const express = require("express");
const mongoose = require("mongoose");

//require the db
const connectDB = require("./config/connectDB"); 
 
//routes
//const userRoutes = require('./routes/api/userRoutes')
const publicRouter = require("./routes/api/publicRoutes");
const Studentrouter = require("./routes/api/studentRoutes");
const TeacherRouter = require("./routes/api/teacherRoutes");
//
const app = express();
app.use(express.json());
mongoose.set("useFindAndModify", false);

//connect the db
connectDB();

//route level midd
//app.use('/api/users', userRoutes)
app.use("/api/public", publicRouter);
app.use("/api/students", Studentrouter);
app.use("/api/teachers", TeacherRouter);

//port
const PORT = process.env.PORT ||4444;
/*
app.get("*", function (req, res) {
  res.send("<h1>Let's start the backend!!!</h1><hr>");
});*/ 

  //For Heroku
  const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'client/build')));
  app.get("*", (req, res)=> {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
} else{
  app.get("/", (req, res)=> {
    res.send("API running...");
  })
}

//listen
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`App listening on port ${PORT} `)
);
