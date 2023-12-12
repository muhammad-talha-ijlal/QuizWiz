const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");
// Middleware to get user by ID
router.post("/question", questionController.createQuestion);
router.delete("/question/:id", questionController.deleteQuestion);
router.get("/question", questionController.getQuestions);
// router.get("/users/:id", questionController.getUser);
router.put("/question/:id", questionController.updateQuestion);
module.exports = router;
