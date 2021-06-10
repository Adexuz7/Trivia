const router = require('express').Router()
const { categoriesRouter } = require('./categories.router')
const { questionsRouter } = require('./questions.router')

// router
router
  .use('/categories', categoriesRouter)
  .use('/questions', questionsRouter)
exports.router = router
