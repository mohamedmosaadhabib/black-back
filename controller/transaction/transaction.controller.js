let Transaction =require('../../model/transactions/transaction');
const {} = require("../../model/transactions/validation");

exports.index=async (req,res)=> {

    return await Transaction.find({}).then(response=>res.json({transactions:response})).catch(err=>{
        res.json({error:err})
    });
};

exports.createOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});
    let transaction=await new Transaction(req.body).then(response=> response).catch(err=>{
        res.json({message:"transaction  Create Error",transaction:{}})
    });

    return res.json({message:"true",transaction})
};

exports.showOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});

    return await Transaction.findById(req.params.id).then(response=>res.json({message:"true",transaction:response})).catch(err=>{
        res.json({message:"transaction  not exits",transaction:{}})
    });
};

//transaction
exports.updateOne=async (req,res)=> {
    return res.json({transactions:await Transaction.updateOne({_id:req.params.id},{$set:req.body})});
};
// exports.updateMany=(req,res)=> {


// };

exports.deleteOne=async (req,res)=> {
     return await Transaction.findByIdAndRemove(req.params.id).then(response=>res.json({message:"Deleted transaction",transaction:response})).catch(err=>{
         console.log(err);
         res.json({message:"Not Found",transaction:{}})
     });
};

// exports.deleteMany=(req,res)=> {


// };