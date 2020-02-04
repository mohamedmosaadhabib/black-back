let Notification =require('../../model/notifications/notification');
const {} = require("../../model/notifications/validation");

exports.index=async (req,res)=> {

    return await Notification.find({}).then(response=>res.json({notifications:response})).catch(err=>{
        res.json({error:err})
    });
};

exports.createOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});
    let Notification=await new Notification(req.body).then(response=> response).catch(err=>{
        res.json({message:"Notification  Create Error",notification:{}})
    });

    return res.json({message:"true",Notification})
};

exports.showOne=async (req,res)=> {
    // let {error}=userUpdate(req.body);
    // if (error) return res.json({error:error.details[0].message});

    return await Notification.findById(req.params.id).then(response=>res.json({message:"true",notification:response})).catch(err=>{
        res.json({message:"Notification  not exits",notification:{}})
    });
};

//Notification
exports.updateOne=async (req,res)=> {
    return res.json({notifications:await Notification.updateOne({_id:req.params.id},{$set:req.body})});
};
// exports.updateMany=(req,res)=> {


// };

exports.deleteOne=async (req,res)=> {
     return await Notification.findByIdAndRemove(req.params.id).then(response=>res.json({message:"Deleted Notification",notification:response})).catch(err=>{
         console.log(err);
         res.json({message:"Not Found",notification:{}})
     });
};

// exports.deleteMany=(req,res)=> {


// };