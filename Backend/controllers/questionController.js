const Question = require("../models/questionModel");

async function createQuestion(req, res) {
  // console.log(req.body);
  try {
    const newQuestion = new Question({
      questionName: req.body.questionName,
      teacherId: req.body.teacherId,
      questionDescription: req.body.questionDescription,
      answerKey: req.body.answerKey,
      option1: req.body.option1,
      option2: req.body.option2,
      option3: req.body.option3,
      option4: req.body.option4,
    });
    console.log(newQuestion);
    const newQuestion1 = await newQuestion.save();
    res.status(201).json(newQuestion1);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getQuestions(req, res) {
  try {
    const newQuestion = await Question.find();
    console.log(newQuestion);
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getQuestion(req, res, next) {
  let newQuestion;
  try {
    newQuestion = await Question.findById(req.params.id);
    if (newQuestion == null) {
      return res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(newQuestion);
}

async function getSpecificQuestionsByQuestionId(req, res) {
  //console.log(req.body);
  try {
    const newQuestion = await Question.find({
      _id: { $in: req.body },
    });
    console.log(newQuestion);
    res.json(newQuestion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function updateQuestion(req, res) {
  //console.log(req.body);
  newQuestion = await Question.findById(req.params.id);
  // console.log(res);
  // console.log(newQuestion);
  newQuestion.questionName = req.body.questionName;
  newQuestion.teacherId = req.body.teacherId;
  newQuestion.questionDescription = req.body.questionDescription;
  newQuestion.answerKey = req.body.answerKey;
  newQuestion.option1 = req.body.option1;
  newQuestion.option2 = req.body.option2;
  newQuestion.option3 = req.body.option3;
  newQuestion.option4 = req.body.option4;

  try {
    newQuestion.save();
    const updatedQuestion = newQuestion;
    res.json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteQuestion(req, res) {
  try {
    console.log(req.params.id);
    const newQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!newQuestion) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion,
  getSpecificQuestionsByQuestionId,
};
