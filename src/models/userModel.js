const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userModel = new schema({
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    rule:{
        type:String,
        default:'user'
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Users",userModel);