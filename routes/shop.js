express=require('express');

const  path=require('path');
router=express.Router();
const adminData=require('./admin');
const product=require('../controllers/products');


router.get('/',product.products);



module.exports=router;
