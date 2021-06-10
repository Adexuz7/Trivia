const { QuestionModel } = require('../models/questions.model')

exports.getQuestion = (req, res) => {
  QuestionModel
    .find()
    .then(question => res.json(question))
    .catch(err => res.status(500).json(err))
}

exports.getRandomQuestion = (req, res) => {
  QuestionModel
    .find()
    .then(question => {
      res.json(question[getRandomInt(0, question.length)])
    })
    .catch(err => res.status(500).json(err))
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
