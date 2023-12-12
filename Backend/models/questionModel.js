const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionName: { type: String, required: true },
  teacherId: { type: String, required: true },
  questionDescription: { type: String },
  answerKey: { type: String},
  option1: { type: String },
  option2: { type: String },
  option3: { type: String },
  option4: { type: String },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
