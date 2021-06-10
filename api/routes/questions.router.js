const questionRouter = require('express').Router()

const {
  getQuestion,
  getRandomQuestion
} = require('../controllers/questions.controller')

questionRouter.get('/', getQuestion)
questionRouter.get('/random', getRandomQuestion)

exports.questionsRouter = questionRouter
