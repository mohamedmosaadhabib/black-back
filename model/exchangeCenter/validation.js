const Joi=require('@hapi/joi');
exports.centerData=(data)=>{
     let schema=Joi.object({
         wallet:Joi.string().min(3).required()
     });
     return schema.validate(data);
 };
