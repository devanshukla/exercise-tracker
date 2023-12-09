const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseschema = new Schema(
    {
        username:{type:String,required:true},
        description:{
            type:String,
            required:false,
        },
        duration:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            required:true
        }
    },
    {
        timestamps:true,
    }

);

const exercisedata = mongoose.model('exercisedata',exerciseschema)
module.exports = exercisedata;