express=require('express');

const  path=require('path');
router=express.Router();


router.get('/',(req,res,next)=> {

    console.log("in another middleware");
    res.sendfile('./views/shop.html');

});



module.exports=router;
