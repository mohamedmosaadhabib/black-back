const Joi=require('@hapi/joi');
exports.registerValidation=(data)=>{
     let schema=Joi.object({
         name:Joi.string().min(3).required(),
         email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).min(6).required(),
         password:Joi.string().min(6).required(),
     });

     return schema.validate(data);
 };
exports.loginValidation=(data)=>{
     let schema=Joi.object({
         email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).min(6).required(),
         password:Joi.string().min(6).required(),
     });

     return schema.validate(data);
 };

exports.userUpdate=(data)=>{
     let schema=Joi.object({
     });
     return schema.validate(data);
 };


//Joi.number()
//Joi.array().items(Joi.number()),