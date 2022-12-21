const Kind = require('../models/kindModel');

class kindController{
    async craeteKind(req,res){
        try{    
            const {name} = req.body;
            const kind = new Kind({name});
            await kind.save();
            res.status(200).json({msg:"Tạo thành công."});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
    async deleteKind(req,res){
        try{
            const {slug} = req.params;
            const kind = await Kind.findOne({slug});
            if(!kind){
                return res.status(400).json({msg:"Thể loại không còn tồn tại."});
            }
            await Kind.findOneAndDelete({slug});
            res.status(200).json({msg:"Xóa thành công."});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async updateKind(req,res){
        try{
            const {slug} = req.params;
            const kind = await Kind.findOne({slug});
            if(!kind){
                return res.status(400).json({msg:"Thể loại không còn tồn tại."});
            }
            await Kind.findOneAndUpdate({slug},{
                name:req.body.name
            });
            res.status(200).json({msg:"Update thành công."});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async getAllKind(req,res){
        try{
            const kinds = await Kind.find();
            res.status(200).json({kinds});
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

}

module.exports = new kindController;    