let mongoose =require('mongoose');

let transactionSchema=new mongoose.Schema({
    name:           { type: Number, default: 0},
    count:          { type:Number },
    formUser:       { type: Object},
    toUser:         { type: Object},
    formCurrency:   { type: String,in:['neu','libra']},
    toCurrency:     { type: String,max:3,default:"USD"},
    requestCase:    { type: String },
    data:           { type: Array,of:String },
    createdAt:      { type: Date, default: Date.now },
    updatedAt:      { type: Date, default: Date.now }
});

module.exports=mongoose.model('Transaction',transactionSchema);