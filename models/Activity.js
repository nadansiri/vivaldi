const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema(
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
    activityTitle: {
      type: String,
      required: true,
      default:"999999999999",
    },
    activityDescription: {
      type: String,
      default:"999999999999",
    },
    deadline: {
      type: String,
      default:"DD/MM/YYYY",
    },
    club: {
      type: String,
      default:"999999999999",
    },
  },
  { timestamps: true }
);

module.exports = Activity = mongoose.model("Activity", activitySchema);
