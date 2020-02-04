let mongoose =require('mongoose');

let centerSchema=new mongoose.Schema({
    name:           { type: String},
    wallet:         { type: Number, default: 0},
    price:          { type: Number, default: 0},
    notifications:  { type: Array, of: String },
    transactions:   { type: Array, of: String },
    createdAt:      { type: Date, default: Date.now },
    updatedAt:      { type: Date, default: Date.now }
});

module.exports=mongoose.model('Center',centerSchema);