const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
// Middleware to get user by ID
router.post("/quiz", quizController.createQuiz);
router.delete("/quiz/:id", quizController.deleteQuiz);
router.get("/quiz", quizController.getQuizes);
router.get("/quiz/:id", quizController.getQuiz);
router.post("/quiz/checkAnswers", quizController.checkAnswers);
router.put("/quiz/:id", quizController.updateQuiz);
module.exports = router;
