const mongoose = require('mongoose');
const schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const product = new schema({
    viet:{
        type:String,
        required:true
    },
    anh:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        default:0
    },
    reviewer:{
        type:Number,
        default:0
    },
    movie:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    categary:{
        type:String
    },
    country:{
        type:String
    },
    times:{
        type:String
    },
    kind:{
        type:Array,
        default:[]
    },
    watch:{
        type:Number,
        default:0
    },
    born:{
        type:Number,
    },
    phimbo:{
        type:Array,
        default:[]
    },
    slug:{
        type:String,
        slug:"viet",
        unique:true
    }
},{
    timestamps:true
});

product.index({viet:"text",anh:"text"});
const newProduct = mongoose.model("Products",product);
newProduct.createIndexes({viet:"text",anh:"text"});
module.exports = newProduct;
