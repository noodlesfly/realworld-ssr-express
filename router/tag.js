const express = require('express')
const tagCtrl = require('../controller/tag')

const tag = express.Router()

// 获取标签
tag.get('/', tagCtrl.getTags)



module.exports = tag