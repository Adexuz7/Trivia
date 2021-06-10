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
    type: mongoose.Schema.Types.ObjectId
  }
})

exports.QuestionModel = mongoose.model('questions', questionSchema)
