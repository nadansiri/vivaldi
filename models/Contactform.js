const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactformSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    heardFrom:{
        type: String,
        default: "***Left blank***"
    },
    ifOther:{
        type: String,
        default: "***Left blank***"
    },
    sugg:{
        type: String,
        default: "***Left blank***"
    },
    
},  
{timestamps: true});

module.exports = Contactform = mongoose.model('Contactform', contactformSchema)