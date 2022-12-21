const User =  require('../models/userModel');
const jwt = require('jsonwebtoken');
class middleWareController{
    async verifyAdmin(req,res,next){
        try{
            const token = req.headers.token;
            if(!token){
                return res.status(400).json({msg:"Vui lòng đăng nhập."});
            }
            const accessToken = token.split(' ')[1];
            jwt.verify(accessToken,process.env.ACCESSTOKEN,async (err,user) => {
                if(err){
                    return res.status(400).json({msg:"Vui lòng đăng nhập."});
                }
                const newUser = await User.findById(user.id);
                if(!newUser){
                    return res.status(400).json({msg:"Vui lòng đăng nhập."});
                }
                if(newUser.rule === 'admin'){
                    return next();
                }
                return res.status(400).json({msg:"Bạn không phải admin."});
            })
        }
        catch(err){
            return res.status(500).json({msg:err.message});
        }
    }
}

module.exports = new middleWareController;