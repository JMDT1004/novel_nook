const mongoose = require('mongoose');

const is_prod = process.env.PORT
mongoose.connect(is_prod ? process.env.MONGODB_URL : 'mongodb://localhost:27017/novel_nook_db')

//mongoose.connect('mongodb://127.0.0.1:27017/novel_nook_db')
module.exports = mongoose.connection;