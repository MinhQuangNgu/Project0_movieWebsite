const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class userController{
    async login(req,res){
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email});
            if(!user){
                return res.status(400).json({msg:"Tài khoản không hề tồn tại."});
            }
            const validPassword = await bcrypt.compare(password,user.password);
            if(!validPassword){
                return res.status(400).json({msg:"Mật khẩu không đúng."});
            }
            const accessToken = createAccessToken(user);
            res.status(200).json({msg:"Đăng nhập thành công.",accessToken});
        }   
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async register(req,res){
        try{
            const {email,password} = req.body;
            const user = await User.findOne({email});
            if(user){
                return res.status(400).json({msg:"Tài khoản đã tồn tại."});
            }
            const hashed = await bcrypt.hash(password,12);
            const newUser = new User({email,password:hashed});
            await newUser.save();
            return res.status(200).json({msg:"Đăng kí thành công."});
        }  
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }

    async changePassword(req,res){
        try{    
            
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
}
function createAccessToken(user){
    return jwt.sign({id:user._id},process.env.ACCESSTOKEN,{
        expiresIn:"3d"
    });
}

module.exports = new userController;