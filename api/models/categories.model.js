const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  name: {
    type: String
  }
})

exports.CategoryModel = mongoose.model('categories', categorySchema)
