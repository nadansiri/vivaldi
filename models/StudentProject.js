const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentProjectSchema = new Schema(
  {
    posterFirstName: {
      type: String,
      default:"999999999999",
    },
    posterLastName: {
      type: String,
      default:"999999999999",
    },
    posterId: {
      type: String,
      default:"999999999999",
    },
    teacherId: {
      type: String,
      default:"999999999999",
    },
    activityId: {
      type: String,
      default:"999999999999",
    },
    projectLink: {
      type: String,
      default:"999999999999",
    },
    review: {
      type: String,
      default:"Not reviewed yet",
    },
    mark: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = StudentProject = mongoose.model("StudentProject", studentProjectSchema);
