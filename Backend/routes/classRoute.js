const express = require("express");
const router = express.Router();
const classController = require("../controllers/classController");
const validateToken = require("../utils/authMiddleware");
// Middleware to get user by ID
router.post("/classes", classController.createClass);
// router.delete("/users/:id", classController.deleteUser);
router.get("/classes", classController.getClasses);
// router.get("/users/:id", classController.getUser);
router.put("/classes/:id", classController.updateClass);
// router.post("/users/login", classController.loginUser);
// router.post("/admin", validateToken, classController.adminDashboard);
// router.get(
//   "/shared",
//   validateToken,
//   classController.requireRoles(["teacher", "admin", "student"]),
//   classController.sharedRoles
// );
module.exports = router;