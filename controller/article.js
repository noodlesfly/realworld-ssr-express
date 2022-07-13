// 从关注的user获取文章
exports.getUserArticles = async (req, res, next) => {
    try {
        res.send('get /articles/feed')
    } catch (error) {
        next(error)
    }
}
// 获取最近的所有文章
exports.getAllArticles = async (req, res, next) => {
    try {
        res.send('get /articles')
    } catch (error) {
        next(error)
    }
}
// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        res.send('post /articles')
    } catch (error) {
        next(error)
    }
}
// 根据slug获取文章
exports.getArticlesBySlug = async (req, res, next) => {
    try {
        res.send('get /articles/:slug')
    } catch (error) {
        next(error)
    }
}
// 根据slug 更新文章
exports.updateArticleBySlug = async (req, res, next) => {
    try {
        res.send('put /articles/:slug')
    } catch (error) {
        next(error)
    }
}
// 根据slug 删除文章
exports.deleteArticlesBySlug = async (req, res, next) => {
    try {
        res.send('delete /articles/:slug')
    } catch (error) {
        next(error)
    }
}