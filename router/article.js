const express = require('express')
const articleCtrl = require('../controller/article')

const article = express.Router()

// 从关注的user获取文章
article.get('/feed', articleCtrl.getUserArticles)
// 获取最近的所有文章
article.get('/', articleCtrl.getAllArticles)
// 创建文章
article.post('/', articleCtrl.createArticle)
// 根据slug获取文章
article.get('/:slug', articleCtrl.getArticlesBySlug)
// 根据slug 更新文章
article.put('/:slug', articleCtrl.updateArticleBySlug)
// 根据slug 删除文章
article.delete('/:slug', articleCtrl.deleteArticlesBySlug)


module.exports = article