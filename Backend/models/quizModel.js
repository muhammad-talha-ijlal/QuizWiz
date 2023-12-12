const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  classId: { type: String },
  quizName: { type: String, required: true },
  questions: { type: Array },
  marks: { type: Number },
  totalMarks: { type: Number, required: true },
  teacherId: { type: String, required: true },
  quizCode: { type: String, required: true },
  quizDate: { type: String, required: true },
  quizTime: { type: String },
  quizDuration: { type: String, required: true },
  quizStatus: { type: String, required: true },
  quizType: { type: String, required: true },
  quizDescription: { type: String, required: true },
  quizInstructions: { type: String, required: true },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
