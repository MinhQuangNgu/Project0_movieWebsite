const mongoose = require('mongoose');
const schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const kindModel = new schema({
    name:{
        type:String
    },
    slug:{
        type:String,
        slug:"name",
        unique:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Kinds",kindModel);