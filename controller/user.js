exports.login = async (req, res, next) => {
    try {
        res.send('post /users/login')
    } catch (error) {
        next(error)
    }
}


exports.register = async (req, res, next) => {
    try {
        res.send('post /users')
    } catch (error) {
        next(error)
    }
}


exports.getUser = async (req, res, next) => {
    try {
        res.send('get /user')
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