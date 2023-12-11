const Quiz = require("../models/quizModel");

async function createQuiz(req, res) {
  // console.log(req.body);
  try {
    const newQuiz = new Quiz({
      quizName: req.body.quizName,
      teacherId: req.body.teacherId,
      classId: req.body.classId,
      questions: req.body.questions,
      marks: req.body.marks,
      totalMarks: req.body.totalMarks,
      quizId: req.body.quizId,
      quizCode: req.body.quizCode,
      quizDate: req.body.quizDate,
      quizTime: req.body.quizTime,
      quizDuration: req.body.quizDuration,
      quizStatus: req.body.quizStatus,
      quizType: req.body.quizType,
      quizDescription: req.body.quizDescription,
      quizInstructions: req.body.quizInstructions,
      answerKey: req.body.answerKey,
      quizResult: req.body.quizResult,
    });
    console.log(newQuiz);
    const newQuiz1 = await newQuiz.save();
    res.status(201).json(newQuiz1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getQuizes(req, res) {
  try {
    const newQuiz = await Quiz.find();
    console.log(newQuiz);
    res.json(newQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getQuiz(req, res, next) {
  let newQuiz;
  try {
    newQuiz = await Quiz.findById(req.params.id);
    if (newQuiz == null) {
      return res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(newQuiz);
}

async function updateQuiz(req, res) {
  // console.log(req.params);
  newQuiz = await Quiz.findById(req.params.id);
  // console.log(res);
  console.log(newQuiz);
  newQuiz.quizName = req.body.quizName;
  newQuiz.teacherId = req.body.teacherId;

  try {
    newQuiz.save();
    const updatedQuiz = newQuiz;
    res.json(updatedQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteQuiz(req, res) {
  try {
    console.log(req.params.id);
    const newQuiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!newQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createQuiz,
  getQuizes,
  getQuiz,
  updateQuiz,
  deleteQuiz,
};
