const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskModel = new Schema({
        id: Number,
        text: String,
        done: Boolean
    })
    
module.exports= mongoose.model('Task',TaskModel)