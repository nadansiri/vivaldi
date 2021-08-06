const express = require("express");
//Models
const Contactform = require("../../models/Contactform");
const Commentpublic = require("../../models/Commentpublic");
const PostForum = require("../../models/PostForum");
const NewsPiece = require("../../models/NewsPiece");
const Activity = require("../../models/Activity");
const StudentProject = require("../../models/StudentProject");
//validators
const {
  commentValidators,
  validator,
} = require("../../middlewares/express-validator");
const publicRouter = express.Router();

//********************Contact Forms*****************************
//Submit A Contact Form
publicRouter.post("/contactus", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    //submit via contact form
    contactform = new Contactform(req.body);
    //save user
    await contactform.save();
    res
      .status(200)
      .send({ msg: "Your message was submitted successfully", contactform });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});
//Get the submitted Forms
publicRouter.get("/contactus", async (req, res) => {
  try {
    //Admin should be the only one accessing this
    let contactUsFormData = await Contactform.find();
    res
      .status(200)
      .send({ msg: "Submitted forms/ Contact Us", contactUsFormData });
    if (!contactUsFormData) {
      res.status(400).send({ msg: "no document found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Delete Form
publicRouter.delete("/contactus/:id", function (req, res) {
  const removedID = req.params.id;
  Contactform.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//********************Public Comment*****************************
//Submit A Comment
publicRouter.post(
  "/comment",
  commentValidators(),
  validator,
  async (req, res) => {
    const { commenter, commentBody } = req.body;
    try {
      commentpublic = new Commentpublic(req.body);
      await commentpublic.save();
      res.status(200).send({
        msg: "Your comment was submitted successfully",
        commentpublic,
      });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  }
);
//Get all the comments to display them
publicRouter.get("/comment", async (req, res) => {
  try {
    let PublicCommentsData = await Commentpublic.find();
    res
      .status(200)
      .send({ msg: "Submitted comments/ Public", PublicCommentsData });
    if (!PublicCommentsData) {
      res.status(400).send({ msg: "No comments found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//PUT : EDIT BY ID
publicRouter.put("/comment/:id", function (req, res) {
  const commentID = req.params.id;
  const update = req.body;
  Commentpublic.findByIdAndUpdate(commentID, update, { new: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
});
//Delete Comment
publicRouter.delete("/comment/:id", function (req, res) {
  const removedID = req.params.id;
  Commentpublic.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//******************** Posts in Forums *****************************
//Submit A Post
publicRouter.post("/publicforum", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    newPost = new PostForum(req.body);
    await newPost.save();
    res
      .status(200)
      .send({ msg: "Your post was submitted successfully", newPost });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});
//Get the submitted Forms
publicRouter.get("/publicforum", async (req, res) => {
  try {
    let SubmittedPostsData = await PostForum.find();
    res
      .status(200)
      .send({ msg: "Submitted posts/ PublicForum", SubmittedPostsData });
    if (!SubmittedPostsData) {
      res.status(400).send({ msg: "no document found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Delete Post
publicRouter.delete("/publicforum/:id", function (req, res) {
  const removedID = req.params.id;
  PostForum.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//Edit Post
//access private + admin
publicRouter.put("/publicforum/:id", async (req, res) => {
  try {
    const postID = req.params.id;
    const update = req.body;

    let result = await PostForum.findByIdAndUpdate(postID, update, {
      new: true,
    });
    res.status(200).send({ msg: "post updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
//******************** Activities *****************************
//Submit An Activity
publicRouter.post("/activities", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    newActivity = new Activity(req.body);
    await newActivity.save();
    res
      .status(200)
      .send({ msg: "The Activity was submitted successfully", newActivity });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});
//Get the activities
publicRouter.get("/activities", async (req, res) => {
  try {
    let SubmittedActivities = await Activity.find();
    res.status(200).send({ msg: "Submitted activities", SubmittedActivities });
    if (!SubmittedActivities) {
      res.status(400).send({ msg: "none found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Delete
publicRouter.delete("/activities/:id", function (req, res) {
  const removedID = req.params.id;
  Activity.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//Edit Post
//access private + admin
publicRouter.put("/activities/:id", async (req, res) => {
  try {
    const activityID = req.params.id;
    const update = req.body;

    let result = await Activity.findByIdAndUpdate(activityID, update, {
      new: true,
    });
    res.status(200).send({ msg: "Updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
//******************** StudentS' Projects *****************************
//Submit A Project
publicRouter.post("/studentprojects", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    newStudentProject = new StudentProject(req.body);
    await newStudentProject.save();
    res.status(200).send({ msg: "Submitted successfully", newStudentProject });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});
//Get the projects
publicRouter.get("/studentprojects", async (req, res) => {
  try {
    let SubmittedStudentProjects = await StudentProject.find();
    res
      .status(200)
      .send({ msg: "Submitted activities", SubmittedStudentProjects });
    if (!SubmittedStudentProjects) {
      res.status(400).send({ msg: "none found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Delete
publicRouter.delete("/studentprojects/:id", function (req, res) {
  const removedID = req.params.id;
  StudentProject.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//Edit
//access private + admin
publicRouter.put("/studentprojects/:id", async (req, res) => {
  try {
    const studentProjectID = req.params.id;
    const update = req.body;

    let result = await StudentProject.findByIdAndUpdate(
      studentProjectID,
      update,
      {
        new: true,
      }
    );
    res.status(200).send({ msg: "Updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
//******************** News *****************************
//Submit A Project
publicRouter.post("/news", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    newNewsPiece = new NewsPiece(req.body);
    await newNewsPiece.save();
    res.status(200).send({ msg: "Submitted successfully", newNewsPiece });
  } catch (error) {
    res.status(500).send({ msg: "Server error" });
  }
});
//Get All
publicRouter.get("/news", async (req, res) => {
  try {
    let SubmittedNews = await NewsPiece.find();
    res.status(200).send({ msg: "Submitted activities", SubmittedNews });
    if (!SubmittedNews) {
      res.status(400).send({ msg: "none found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Delete
publicRouter.delete("/news/:id", function (req, res) {
  const removedID = req.params.id;
  NewsPiece.findByIdAndRemove(removedID)
    .then((result) => res.send(result))
    .catch((err) => res.status(500).send({ msg: "Server error", err }));
});
//Edit
//access private + admin
publicRouter.put("/news/:id", async (req, res) => {
  try {
    const newsPieceID = req.params.id;
    const update = req.body;

    let result = await NewsPiece.findByIdAndUpdate(newsPieceID, update, {
      new: true,
    });
    res.status(200).send({ msg: "Updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
module.exports = publicRouter;
