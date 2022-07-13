const express = require('express')
const favoriteCtrl = require('../controller/favorite')

const favorite = express.Router()

// 关注一篇文章
favorite.post('/:slug/favorite', favoriteCtrl.favoriteArticle)

// 取关一篇文章
favorite.delete('/:slug/favorite', favoriteCtrl.unFavoriteArticle)



module.exports = favorite