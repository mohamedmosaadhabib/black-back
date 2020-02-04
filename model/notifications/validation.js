const Joi=require('@hapi/joi');
exports.notificationData=(data)=>{
     let schema=Joi.object({
         name:Joi.string().min(3).required(),
         type:Joi.string().min(3).required(),
         message:Joi.string().min(3).required()
     });
     return schema.validate(data);
 };
