let mongoose =require('mongoose');

let requestSchema=new mongoose.Schema({
    count:          { type: Number, default: 0},
    user_id:        { type: Object},
    formCurrency:   { type: String,in:['neo','libra']},
    toCurrency:     { type: String,max:3,default:"USD"},
    transactions:   { type: Array, of: String },
    requestCase:    { type: String },
    createdAt:      { type: Date, default: Date.now },
    updatedAt:      { type: Date, default: Date.now }
});

module.exports=mongoose.model('Request',requestSchema);