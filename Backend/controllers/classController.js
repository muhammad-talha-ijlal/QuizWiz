const bcrypt = require("bcrypt");
const Class = require("../models/classModel");

async function createClass(req, res) {
  // console.log(req.body);
  try {
    const newClass = new Class({
      className: req.body.className,
      teacherId: req.body.teacherId,
    });
    console.log(newClass);
    const newClass1 = await newClass.save();
    res.status(201).json(newClass1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getClasses(req, res) {
  try {
    const newClass = await Class.find();
    console.log(newClass);
    res.json(newClass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getClass(req, res, next) {
  let newClass;
  try {
    newClass = await Class.findById(req.params.id);
    if (newClass == null) {
      return res.status(404).json({ message: "Class not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(newClass);
}

async function updateClass(req, res) {
  // console.log(req.params);
  newClass = await Class.findById(req.params.id);
  // console.log(res);
  console.log(newClass);
  newClass.className = req.body.className;
  newClass.teacherId = req.body.teacherId;
  newClass.quizId = req.body.quizId;
  newClass.quizName = req.body.quizName;
  try {
    newClass.save();
    const updatedClass = newClass;
    res.json(updatedClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteClass(req, res) {
  try {
    console.log(req.params.id);
    const newClass = await Class.findByIdAndDelete(req.params.id);
    if (!newClass) {
      return res.status(404).json({ message: "Class not found" });
    }
    res.status(200).json({ message: "Class deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
};
