const express=require('express');

 const router=express.Router();

router.get('/add-prod',(req,res,next)=> {

    console.log("in the middleware");
    res.send('<form action="/product" method="post"><input type="text" name="title"><input type="submit"></form>');


});


router.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');



});
module.exports=router;
