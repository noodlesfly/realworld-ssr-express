const { User } = require('../model')

exports.showLogin = (req, res, next) => {
    try {
        res.render('login', {
            isLogin: true
        })
    } catch (error) {
        next(error)
    }
}
exports.showRegister = (req, res, next) => {
    try {
        res.render('login', {
            isLogin: false
        })
    } catch (error) {
        next(error)
    }
}
exports.showSettings = (req, res, next) => {
    try {
        res.render('setting')
    } catch (error) {
        next(error)
    }

}
exports.showProfile = (req, res, next) => {
    try {
        res.render('profile')
    } catch (error) {
        next(error)
    }

}
exports.showFavoriteProfile = (req, res, next) => {
    try {
        res.render('profile')
    } catch (error) {
        next(error)
    }

}

exports.handleRegister = async (req, res, next) => {
    try {
        const user = new User(req.body.user)
        await user.save()
        res.status(201).json({
            user
        })
    } catch (error) {
        next(error)
    }
}