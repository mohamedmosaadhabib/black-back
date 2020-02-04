const Joi=require('@hapi/joi');
exports.transactionData=(data)=>{
     let schema=Joi.object({
         wallet:Joi.string().min(3).required()
     });
     return schema.validate(data);
 };
