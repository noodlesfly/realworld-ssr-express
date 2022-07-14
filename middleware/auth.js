const { verify } = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')

module.exports = async (req, res, next) => {
    // 从请求头获取token并进行验证
    console.log(req.headers)
    let token = req.headers.authorization
    token = token ? token.split('Bearer ')[1] : ''


    if (!token) {
        return res.status(401).end()
    }


    try {
        const ret = await verify(token, jwtSecret)
        req._id = ret.userId
        next()
    } catch (error) {
        return res.status(401).end()
    }


}