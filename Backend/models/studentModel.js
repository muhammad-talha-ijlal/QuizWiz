const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: { type: String, unique: true, required: true },
  classes: { type: Array, required: false },
  marks: { type: Array, required: false },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
