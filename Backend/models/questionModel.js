const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionName: { type: String, required: true },
  teacherId: { type: String, required: true },
  questionDescription: { type: String, required: true },
  answerKey: { type: string, required: true },
  option1: { type: String, required: true },
  option2: { type: String, required: true },
  option3: { type: String, required: true },
  option4: { type: String, required: true },
});

const Quiz = mongoose.model("Quiz", questionSchema);

module.exports = Quiz;
