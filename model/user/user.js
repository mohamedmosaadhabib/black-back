let mongoose =require('mongoose');

let userSchema=new mongoose.Schema({
    name:           { type:String, required:true, min:3, max:255, trim: true },
    email:          { type:String, required:true, min:6, max:255, unique:true, trim: true , index: true},
    password:       { type:String, required:true, min:6, max:1024, trim: true },
    locations:      { type: Array, of: String },
    roles:          { type: Array, of: String ,default:[{name:'user'}] },
    permissions:    { type: Array, of: String },
    notifications:  { type: Array, of: String },
    transactions:   { type: Array, of: String },
    payments:       { type: Array, of: String},
    wallet:         { type: Array, of: Number },
    visa:           { type: String },
    createdAt:      { type: Date, default: Date.now },
    updatedAt:      { type: Date, default: Date.now }
});

module.exports=mongoose.model('User',userSchema);