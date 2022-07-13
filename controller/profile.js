// 获取用户profile
exports.getUserProfile = async (req, res, next) => {
    try {
        res.send('get /profiles/:username')
    } catch (error) {
        next(error)
    }
}

// 关注user
exports.followUser = async (req, res, next) => {
    try {
        res.send('post /profiles/:username/follow')
    } catch (error) {
        next(error)
    }
}

// 取消关注user

exports.unFollowUser = async (req, res, next) => {
    try {
        res.send('delete /profiles/:username/follow')
    } catch (error) {
        next(error)
    }
}
