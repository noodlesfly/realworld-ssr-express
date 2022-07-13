const express = require('express')
const profileCtrl = require('../controller/profile')

const profile = express.Router()

// 获取用户profile
profile.get('/:username',profileCtrl.getUserProfile)
// 关注user
profile.post('/:username/follow',profileCtrl.followUser)
// 取消关注user
profile.delete('/:username/follow',profileCtrl.unFollowUser)


module.exports = profile