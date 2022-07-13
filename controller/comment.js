// 获取一篇文章的评论
exports.getComments = async (req, res, next) => {
    try {
        res.send('get /comments')
    } catch (error) {
        next(error)
    }
}
// 为一篇文章发表评论
exports.postComments = async (req, res, next) => {
    try {
        res.send('post /:slug/comments')
    } catch (error) {
        next(error)
    }
}
// 删除一篇文章的评论
exports.deleteComments = async (req, res, next) => {
    try {
        res.send('delete /:slug/comments/:id')
    } catch (error) {
        next(error)
    }
}