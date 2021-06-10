const categoriesRouter = require('express').Router()

const {
  getAllCategories
} = require('../controllers/categories.controller')

categoriesRouter.get('/', getAllCategories)

exports.categoriesRouter = categoriesRouter
