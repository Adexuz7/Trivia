const { CategoryModel } = require('../models/categories.model')

exports.getAllCategories = (req, res) => {
  CategoryModel
    .find()
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err))
}
