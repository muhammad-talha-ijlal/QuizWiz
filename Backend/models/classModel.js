const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  className: { type: String, unique: true, required: true },
  students: { type: Array, required: false },
  teacherId: { type: String, required: true },
  quizzes: { type: Array, required: false },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
