const express = require('express')
const commentCtrl = require('../controller/comment')

const comment = express.Router()

// 获取一篇文章的评论
comment.get('/:slug/comments', commentCtrl.getComments)
// 为一篇文章发表评论
comment.post('/:slug/comments', commentCtrl.postComments)
// 删除一篇文章的评论
comment.delete('/:slug/comments/:id', commentCtrl.deleteComments)


module.exports = comment