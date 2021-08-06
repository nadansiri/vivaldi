const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsPieceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    newsBody: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = NewsPiece = mongoose.model("NewsPiece", newsPieceSchema);
