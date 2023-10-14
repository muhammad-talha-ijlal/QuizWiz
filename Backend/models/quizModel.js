const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  classId: { type: String, required: true },
  quizName: { type: String, required: true },
  questions: { type: Array, required: true },
  marks: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  teacherId: { type: String, required: true },
  quizId: { type: String, required: true },
  quizCode: { type: String, required: true },
  quizDate: { type: String, required: true },
  quizTime: { type: String, required: true },
  quizDuration: { type: String, required: true },
  quizStatus: { type: String, required: true },
  quizType: { type: String, required: true },
  quizDescription: { type: String, required: true },
  quizInstructions: { type: String, required: true },
  answerKey: { type: Array, required: true },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
