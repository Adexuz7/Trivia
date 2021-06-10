const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String
  }
})

exports.CategoryModel = mongoose.model('categories', categorySchema)
