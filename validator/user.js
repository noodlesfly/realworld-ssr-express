const { body } = require('express-validator')
const { User } = require('../model')
const validate = require('../middleware/validate')
const md5 = require('../utils/md5')

exports.login = [
    validate([
        body('user.email').notEmpty().withMessage('邮箱不能为空').isEmail().withMessage('邮箱格式不正确'),
        body('user.password').notEmpty().withMessage('密码不能为空').isLength({ min: 6 }).withMessage('密码长度不能小于6位')

    ]),
    validate([
        body('user.email').custom(async (email, { req }) => {
            const user = await User.findOne({
                email
            })
            .select('password')
            if (!user) {
                return Promise.reject('找不到该用户')
            }
            req.user = user
        }).trim(),
    ]),
    validate([
        body('user.password').custom(async (password, { req }) => {
            if (md5(password.trim()) !== req.user.password) {
                return Promise.reject('密码不正确')
            }
        }).trim()
    ]),
]

exports.register = validate([
    body('user.username').notEmpty().withMessage('用户名不能为空').custom(async username => {
        const user = await User.findOne({ username })
        if (user) {
            return Promise.reject('用户名已存在')
        }
    }).trim(),
    body('user.email').notEmpty().withMessage('邮箱不能为空').isEmail().withMessage('邮箱格式不正确').custom(async email => {
        const user = await User.findOne({
            email
        })
        if (user) {
            return Promise.reject('邮箱已存在')
        }
    }).trim(),
    body('user.password').notEmpty().withMessage('密码不能为空').isLength({ min: 6 }).withMessage('密码长度不能小于6位').trim()

])