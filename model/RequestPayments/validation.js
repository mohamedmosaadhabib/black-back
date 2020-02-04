const Joi=require('@hapi/joi');
exports.RequestData=(data)=>{
     let schema=Joi.object({
         count:Joi.number().required(),
         user_id:Joi.object().required(),
         transactions:Joi.array(),
         requestCase:Joi.string().required(),
     });
     return schema.validate(data);
 };
