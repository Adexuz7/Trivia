const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  correct_answer: {
    type: String
  },
  incorrect_answers: {
    type: Array
  },
  categoryId: {
    type: Number
  }
})

exports.QuestionModel = mongoose.model('questions', questionSchema)
