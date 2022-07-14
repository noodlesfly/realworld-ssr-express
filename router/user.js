const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')

const user = express.Router()

// 登录
user.post('/users/login', userValidator.login, userCtrl.login)
// 注册
user.post('/users', userValidator.register, userCtrl.register)
// 获取当前用户信息
user.get('/user', auth, userCtrl.getUser)
// 更新当前用户信息
user.put('/user', auth, userCtrl.putUser)


module.exports = user