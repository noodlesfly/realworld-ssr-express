const mongoose = require('mongoose');
const { dbUri } = require('../config/config.default')
const { log } = console

main().catch(err => log(err));

async function main() {
    await mongoose.connect(dbUri);
}

module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article')),
}

