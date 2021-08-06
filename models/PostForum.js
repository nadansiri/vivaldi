const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    postBody:{
        type: String,
        default: "***Left blank***"
    },
    posterId:{
        type: String,
    },
    
},  
{timestamps: true});

module.exports = PostForum = mongoose.model('PostForum', postSchema)