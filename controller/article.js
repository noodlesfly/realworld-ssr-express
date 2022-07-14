const { Article, User } = require('../model')

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
        let { offset = 0, limit = 20, tag, author } = req.query
        const filter = {}
        if (tag) {
            tag = decodeURIComponent(tag)
            filter.tagList = tag
        }

        if (author) {
            author = decodeURIComponent(author)
            const user = await User.findOne({
                username: author
            })

            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter).skip(Number.parseInt(offset)).limit(Number.parseInt(limit)).sort({
            createdAt: 1
        })
        const articlesCount = await Article.countDocuments()
        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (error) {
        next(error)
    }
}
// 创建文章
exports.createArticle = async (req, res, next) => {
    try {
        const article = new Article(req.body.article)
        article.author = req._id
        await article.validate()
        await article.populate('author')
        await article.save()
        res.status(201).json({ article })
    } catch (error) {
        next(error)
    }
}
// 根据slug获取文章
exports.getArticlesBySlug = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.slug).populate('author')
        if (!article) {
            return res.status(404).end('')
        }
        res.status(200).json({
            article
        })
    } catch (error) {
        next(error)
    }
}
// 根据slug 更新文章
exports.updateArticleBySlug = async (req, res, next) => {
    try {
        const newArticle = req.body.article
        const oldArticle = req.article
        oldArticle.title = newArticle.title || oldArticle.title
        oldArticle.description = newArticle.description || oldArticle.description
        oldArticle.body = newArticle.body || oldArticle.body

        await oldArticle.save()
        res.status(200).json({
            article: oldArticle
        })
    } catch (error) {
        next(error)
    }
}
// 根据slug 删除文章
exports.deleteArticlesBySlug = async (req, res, next) => {
    try {
        const article = req.article
        await article.remove()
        res.status(204).end()
    } catch (error) {
        next(error)
    }
}