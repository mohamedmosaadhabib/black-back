let User =require('../../model/user/user');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const axios = require("axios");
const {registerValidation,loginValidation} = require("../../model/user/validation");
async function getLocation(){
    let ip=await axios.get('https://ipapi.co/ip/').then(respone=>respone.data);
    let dataIP=await axios.get('https://ipapi.co/'+ip+'/json/').then(respone=>respone.data);
    dataIP.createAt=Date.now();
    return dataIP;
}
exports.register=async (req,res)=> {

    let {error}=await registerValidation(req.body);
    if (error) return res.json({error:error.details[0].message});
    let salt = await bcrypt.genSalt(10);
    let HashPassword=await bcrypt.hash(req.body.password,salt);
    let dataIP=await getLocation();
    let user=new User({
        name:req.body.name,
        email:req.body.email,
        password:HashPassword,
        locations:[]
    });
    user.locations.push(dataIP);
    if (await User.findOne({email:req.body.email})) return  res.json({message:"email already Exists"});
    try {
        user=await user.save();
        return res.json({user:user._id});
    }catch (e) {
        return res.status(e.status).json({stats:false,error:"Not Work"});
    }

};
exports.login=async (req,res)=> {
    let {error}=await loginValidation(req.body);
    if (error) return res.json({error:error.details[0].message});
    let user =await User.findOne({ email:req.body.email});
    if (!user) return  res.json({message:"Email doesn't exists"});
    let compare=await bcrypt.compare(req.body.password,user.password);
    if (!compare) return  res.json({message:"Email or password wrong"});
    let token=jwt.sign({_id:user._id},process.env.TOKEN_LOGIN);
    let dataIP=await getLocation();
    if (dataIP) user.locations.push(dataIP);
    await user.save();
    res.header(process.env.TOKEN_NAME,token).json({[process.env.TOKEN_NAME]:token});
};
exports.logout=async (req,res)=> {
    try {
        req.headers[[process.env.TOKEN_NAME]]=null;
        return await res.json({message:"logged out",token:req.headers});
    }catch (e) {
        return  res.json({error: e.message});
    }

};