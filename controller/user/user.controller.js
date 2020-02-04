let User =require('../../model/user/user');
const {userUpdate} = require("../../model/user/validation");


exports.index=async (req,res)=> {

    return await User.find({}).then(response=>res.json({users:response})).catch(err=>{
        res.json({error:err})
    });
};

exports.showOne=async (req,res)=> {
    let {error}=userUpdate(req.body);
    if (error) return res.json({error:error.details[0].message});

    return await User.findById(req.params.id).then(response=>res.json({message:"true",user:response})).catch(err=>{
        res.json({message:"user  not exits",user:{}})
    });
};

exports.updateOne=async (req,res)=> {

    let users=User.all();
    return res.json(users);
};
exports.updateMany=(req,res)=> {
    let users=User.all();
    return res.json(users);
};

exports.deleteOne=async (req,res)=> {
     return await User.findByIdAndRemove(req.params.id).then(response=>res.json({message:"Deleted User",user:response})).catch(err=>{
         console.log(err);
         res.json({message:"Not Found",user:{}})
     });
};

exports.deleteMany=(req,res)=> {
    let users=User.all();
    return res.json(users);
};