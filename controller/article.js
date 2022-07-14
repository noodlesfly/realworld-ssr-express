exports.showHome = (req, res, next) => {
    try {
        res.render('index')
    } catch (error) {
        next(error)
    }
}
exports.createEditor = (req, res, next) => {
    try {
        res.render('edit')
    } catch (error) {
        next(error)
    }
}
exports.getArticle = (req, res, next) => {
    try {
        res.render('article')
    } catch (error) {
        next(error)
    }
}