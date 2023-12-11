const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const validateToken = require("../utils/authMiddleware");
// Middleware to get user by ID
router.post("/classes", classController.createClass);
router.delete("/classes/:id", classController.deleteClass);
router.get("/classes", classController.getClasses);
// router.get("/users/:id", classController.getUser);
router.put("/classes/:id", classController.updateClass);
module.exports = router;
module.exports = router;
