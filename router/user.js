const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
// const auth = require('../middleware/auth')

const user = express.Router()

user.get('/login', userCtrl.showLogin)


user.get('/register', userCtrl.showRegister)
user.post('/register',userValidator.register, userCtrl.handleRegister)

user.get('/settings', userCtrl.showSettings)

user.get('/profile/:username', userCtrl.showProfile)
user.get('/profile/:username/favorites', userCtrl.showFavoriteProfile)


module.exports = user