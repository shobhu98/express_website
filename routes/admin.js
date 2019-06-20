const express=require('express');

 const router=express.Router();
const product=[];
const  productController=require('../controllers/products');
router.get('/add-prod',productController.addProduct );


router.use('/product',productController.productlist);
// module.exports=router
exports.router=router;
exports.product=product;