const express = require('express')
const articleCtrl = require('../controller/article')
// const articleValidator = require('../validator/article')
// const auth = require('../middleware/auth')

const article = express.Router()

article.get('/', articleCtrl.showHome)


article.get('/editor', articleCtrl.createEditor)
article.get('/editor/:slug', articleCtrl.createEditor)
article.get('/article/:slug', articleCtrl.getArticle)



module.exports = article