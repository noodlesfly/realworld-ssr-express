const express = require('express')

const router = express.Router()

router.use(require('./user'))
router.use('/profiles', require('./profile'))
router.use('/articles', require('./article'))
router.use('/articles', require('./comment'))
router.use('/articles', require('./favorite'))
router.use('/tags', require('./tag'))


module.exports = router