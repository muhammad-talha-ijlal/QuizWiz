const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");
// Middleware to get user by ID
router.post("/question", questionController.createQuestion);
router.delete("/question/:id", questionController.deleteQuestion);
router.get("/question", questionController.getQuestions);
router.post(
  "/question/getQuestionsByIds",
  questionController.getSpecificQuestionsByQuestionId
);
router.put("/question/:id", questionController.updateQuestion);
module.exports = router;
