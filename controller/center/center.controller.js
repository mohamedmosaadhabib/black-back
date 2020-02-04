let Center =require('../../model/exchangeCenter/center');
const {} = require("../../model/exchangeCenter/validation");

exports.index=async (req,res)=> {
    return await Center.find({}).then(response=>res.json({centers:response})).catch(err=>{
        res.json({error:err})
    });
};

exports.createOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});
    let Center=await new Center(req.body).then(response=> response).catch(err=>{
        res.json({message:"Center  Create Error",center:{}})
    });

    return res.json({message:"true",Center})
};

exports.showOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});

    return await Center.findById(req.params.id).then(response=>res.json({message:"true",center:response})).catch(err=>{
        res.json({message:"Center  not exits",center:{}})
    });
};

//Center
exports.updateOne=async (req,res)=> {
    return res.json({centers:await Center.updateOne({_id:req.params.id},{$set:req.body})});
};
// exports.updateMany=(req,res)=> {


// };

exports.deleteOne=async (req,res)=> {
     return await Center.findByIdAndRemove(req.params.id).then(response=>res.json({message:"Deleted Center",center:response})).catch(err=>{
         console.log(err);
         res.json({message:"Not Found",center:{}})
     });
};

// exports.deleteMany=(req,res)=> {


// };