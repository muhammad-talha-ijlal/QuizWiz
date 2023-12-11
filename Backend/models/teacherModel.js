const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  classes: { type: Array, required: false },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
