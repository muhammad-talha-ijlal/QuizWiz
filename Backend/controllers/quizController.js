const Quiz = require("../models/quizModel");
const Question = require("../models/questionModel");
const async = require("async");

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
  //console.log(req.body);
  newQuiz = await Quiz.findById(req.params.id);
  // console.log(res);
  console.log(newQuiz);
  newQuiz.quizName = req.body.quizName;
  newQuiz.totalMarks = req.body.totalMarks;
  newQuiz.questions = req.body.questions;
  newQuiz.quizCode = req.body.quizCode;
  newQuiz.quizDate = req.body.quizDate;
  newQuiz.quizDuration = req.body.quizDuration;
  newQuiz.quizStatus = req.body.quizStatus;
  newQuiz.quizType = req.body.quizType;
  newQuiz.quizDescription = req.body.quizDescription;
  newQuiz.quizInstructions = req.body.quizInstructions;

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

async function checkAnswers(req, res) {
  console.log(req.body);
  try {
    const newQuiz = await Quiz.findById(req.body.quizId);
    if (newQuiz == null) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    const questionIds = newQuiz.questions;
    const questions = await async.map(questionIds, async (questionId) => {
      return await Question.findById(questionId); // Replace Question with your actual model
    });
    console.log(questions);
    console.log(newQuiz);
    const studentAnswers = req.body.answers;
    let marks = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].answerKey === studentAnswers[i]) {
        marks += 1;
      }
    }
    const quizResult = {
      marks: marks,
      totalMarks: newQuiz.totalMarks,
      quizId: req.body.quizId,
      studentId: req.body.studentId,
    };
    // newQuiz.quizResult.push(quizResult);
    newQuiz.save();
    res
      .status(200)
      .json({
        message: "Quiz result saved successfully",
        quizResult: quizResult,
      });
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
  checkAnswers,
};
