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
const jwt = require("jsonwebtoken"); // Import the jwt library

function generteLoginToken(newClass) {
  const payload = {
    role: newClass.role,

    id: newClass._id,
  };
  const token = jwt.sign(payload, "adsfasdfjkh$#asdfasdf.adsfxc");
  return token;
}
async function loginClass(req, res) {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    const newClass = await Class.findOne({ email });
    console.log(newClass);
    if (!newClass) return res.status(404).json({ error: "Class not found" });

    if (!(await bcrypt.compare(password, newClass.password))) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    var token = generteLoginToken(newClass);

    return res.status(200).json({
      message: "Logged in successfully",
      email: email,
      fullname: newClass.fullname,
      newClassid: newClass._id,
      token: token,
      role: newClass.role,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}
async function adminDashboard(req, res) {
  return res.status(200).json({ message: "Welcome to admin dashboard" });
}

function requireRoles(roles) {
  return (req, res, next) => {
    console.log(req);
    const newClassRole = req.newClass.role; // Assuming you saved the newClass's role in req.newClass
    console.log(newClassRole);
    if (roles.includes(newClassRole)) {
      // Class has one of the required roles, so allow access

      next();
    } else {
      // Class does not have any of the required roles, so send a forbidden response

      res.status(403).json({ message: "Permission denied" });
    }
  };
}

async function sharedRoles(req, res) {
  const role = req.newClass.role;
  return res.json({ message: `Welcome ${role}` });
}

module.exports = {
  createClass,
  getClasses,
  getClass,
  updateClass,
  deleteClass,
  loginClass,
  adminDashboard,
  requireRoles,
  sharedRoles,
};
