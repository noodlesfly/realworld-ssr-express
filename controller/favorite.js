// 关注一篇文章
exports.favoriteArticle = async (req, res, next) => {
    try {
        res.send(' post /:slug/favorites')
    } catch (error) {
        next(error)
    }
}

exports.unFavoriteArticle = async (req, res, next) => {
    try {
        res.send(' delete /:slug/favorites')
    } catch (error) {
        next(error)
    }
}