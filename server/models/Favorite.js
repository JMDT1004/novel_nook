const {Schema, model, Types} = require('mongoose');

const favoriteSchema = new Schema({
    bookId: {
        type: String,
        required: true
    },
    user: {
        type: Types.ObjectId,
        ref: 'User'
    },
}, {timestamps: true});

const Favorite = model('Favorite', favoriteSchema);

module.exports = Favorite;