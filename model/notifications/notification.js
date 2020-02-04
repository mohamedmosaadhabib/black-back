let mongoose =require('mongoose');

let notificationSchema=new mongoose.Schema({
    name:           { type: Number, default: 0},
    type:           { type:String,default:"to User"},
    message:        { type:String, of: String },
    createdAt:      { type: Date, default: Date.now },
    updatedAt:      { type: Date, default: Date.now }
});

module.exports=mongoose.model('Notification',notificationSchema);