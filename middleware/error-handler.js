const { format } = require('util')
module.exports = function () {
    return (err, req, res, next) => {
        res.status(500).json({
            error: err.message
        })
    }
}