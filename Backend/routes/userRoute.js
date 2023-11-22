const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validateToken = require("../utils/authMiddleware");
// Middleware to get user by ID
router.post("/users", userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);
router.patch("/users/:id", userController.updateUser);
router.post("/users/login", userController.loginUser);
router.post("/admin", validateToken, userController.adminDashboard);
router.get(
  "/shared",
  validateToken,
  userController.requireRoles(["teacher", "admin", "student"]),
  userController.sharedRoles
);
module.exports = router;
