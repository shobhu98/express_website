const express=require('express');

 const router=express.Router();
const product=[];
const  productController=require('../controllers/products');
router.get('/add-prod',productController.addProduct );


router.use('/product',(req,res)=>{
    product.push({title:req.body.title});
    //console.log(product);

    res.redirect('/');



});
// module.exports=router
exports.router=router;
exports.product=product;