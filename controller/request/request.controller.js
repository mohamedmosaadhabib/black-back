let Request =require('../../model/RequestPayments/request');
const {} = require("../../model/RequestPayments/validation");

exports.index=async (req,res)=> {

    return await Request.find({}).then(response=>res.json({requests:response})).catch(err=>{
        res.json({error:err})
    });
};

exports.showOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});

    return await Request.findById(req.params.id).then(response=>res.json({message:"true",request:response})).catch(err=>{
        res.json({message:"request  not exits",request:{}})
    });
};
//transaction
exports.updateOne=async (req,res)=> {
    return res.json({requests:await Request.updateOne({_id:req.params.id},{$set:req.body})});
};
// exports.updateMany=(req,res)=> {


// };

exports.deleteOne=async (req,res)=> {
     return await Request.findByIdAndRemove(req.params.id).then(response=>res.json({message:"Deleted request",request:response})).catch(err=>{
         console.log(err);
         res.json({message:"Not Found",request:{}})
     });
};

// exports.deleteMany=(req,res)=> {


// };