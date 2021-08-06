const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentpublicSchema = new Schema({
    commenter: {
        type: String,
        required: true,
    },
    commentBody: {
        type: String,
        required: true,
    }},  
    {timestamps: true});

module.exports = Commentpublic = mongoose.model('Commentpublic', commentpublicSchema)