const { body, param } = require('express-validator')
const validate = require('../middleware/validate')
const { Article } = require('../model')
const { Ob } = require('mongoose')



exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('文章标题不能为空'),
    body('article.description').notEmpty().withMessage('文章摘要不能为空'),
    body('article.body').notEmpty().withMessage('文章内容不能为空'),
])

exports.getArticlesBySlug = validate([
    param('slug').isMongoId().withMessage('文章ID有误')
])

exports.updateArticleBySlug = [
    validate([
        param('slug').isMongoId().withMessage('文章ID有误')
    ]),
    async (req, res, next) => {
        const articleId = req.params.slug
        // 验证文章是否存在
        const article = await Article.findById(articleId)
        if (!article) {
            return res.status(404).end('')
        }
        req.article = article
        // 验证当前用户是否是文章作者
        const userId = req._id
        if (userId && article.author.toString() !== userId) {
            return res.status(403).send('没有修改文章的权限')
        }
        next()
    }
]

exports.deleteArticlesBySlug = exports.updateArticleBySlug


