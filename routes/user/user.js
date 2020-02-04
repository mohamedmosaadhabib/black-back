let router =require('express').Router();
let {authVerify} =require('../../middelware/auth');
let {showOne,deleteOne,index,updateOne} =require('../../controller/user/user.controller');

router.get('/users/:id',showOne);
router.get('/users',index);
router.post('/users/delete/:id',deleteOne);
router.post('/users/update/:id',updateOne);

module.exports=router;