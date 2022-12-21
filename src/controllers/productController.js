const Product = require('../models/productModel');

class apiQuery{
    constructor(query,queryString){
        this.query = query;
        this.queryString = queryString;
    }

    sorting(){
        const sort = this.queryString.sort || '-createdAt';
        this.query = this.query.sort(sort);
        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 15;
        const skip = (page - 1) * limit;
        this.query = this.query.limit(limit).skip(skip);
        return this;
    }

    searching(){
        const search = this.queryString.search;
        if(search){
            this.query = this.query.find({
                $text:{
                    $search:search
                }
            })
        }
        else{
            this.query = this.query.find();
        }
        return this;
    }

    filtering(){
        const obj = {...this.queryString};

        const ecludesFields = ['page','limit','search','sort'];

        ecludesFields.forEach(el => delete(obj[el]));

        let strObj = JSON.stringify(obj);

        strObj = strObj.replace(/\b(regex|lte|lt|gt|gte)\b/g,match => '$' + match);

        this.query = this.query.find(JSON.parse(strObj));

        return this;    
    }


}


class productController{
    async getProduct(req,res){
        try{
            const api = new apiQuery(Product.find(),req.query).sorting().filtering().paginating().searching();
            const products = await api.query;
            const count = await Product.count(api.query.limit(null).skip(null));
            res.status(200).json({products,count});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async deleteProduct(req,res){
        try{
            const {slug} = req.params;
            const product = await Product.findOne({slug});
            if(product){
                return res.status(400).json({msg:"Sản phẩm này không hề tồn tại."});
            }
            await Product.findOneAndDelete({slug});
            return res.status(200).json({msg:"Xóa Thành Công."});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async createProduct(req,res){
        try{
            const {viet,anh,trailer,movie,description,image,status,country,times,kind,born,categary} = req.body;
            const product = new Product({viet,anh,trailer,movie,description,image,status,country,times,kind,born,categary});
            await product.save();
            res.status(200).json({msg:"Tạo Thành Công."});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async updateProduct(req,res){
        try{
            const {phimbo,viet,anh,trailer,movie,description,image,status,country,times,kind,born,categary} = req.body;
            const product = await Product.findOne({slug:req.params.slug});
            if(!product){
                return res.status(400).json({msg:"Sản Phẩm Không Tồn Tại."});
            }
            await Product.findOneAndUpdate({slug:req.params.slug},{
                phimbo,viet,anh,trailer,movie,description,image,status,country,times,kind,born,categary
            });
            res.status(200).json({msg:`Cập Nhật Thành Công ${viet}`});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async getOne(req,res){
        try{
            const {slug} = req.params;
            const product = await Product.findOne({slug:req.params.slug});
            if(!product){
                return res.status(400).json({msg:"Sản Phẩm Không Tồn Tại."});
            }
            res.status(200).json({product});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
}

module.exports = new productController;