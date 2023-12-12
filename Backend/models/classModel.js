const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, unique: false, required: true },
  students: { type: Array, required: false },
  teacherId: { type: String, required: true },
  quizId: { type: String, required: false },
  quizName: { type: String, required: false },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
