const { log } = console
const { User } = require('../model')
const jwt = require('../utils/jwt')
const { jwtSecret } = require('../config/config.default')
exports.login = async (req, res, next) => {
    try {
        const user = req.user.toJSON()
        delete user.password
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret, { expiresIn: '2 days' })
        res.status(200).json({
            ...user,
            token
        })
    } catch (error) {
        next(error)
    }
}


exports.register = async (req, res, next) => {
    try {
        let user = new User(req.body.user)
        await user.save()
        user = user.toJSON()
        delete user.password
        res.status(201).json({
            user
        })
    } catch (error) {
        next(error)
    }
}


exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req._id)
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}


exports.putUser = async (req, res, next) => {
    try {

        res.send('put /user')
    } catch (error) {
        next(error)
    }
}