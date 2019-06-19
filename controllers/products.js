

exports.addProduct=(req,res,next)=> {

    console.log("in the middleware");
    // res.send('<form action="/product" method="post"><input type="text" name="title"><input type="submit"></form>');
    res.sendfile('./views/add_product.html');


};

exports.products=(req,res,next)=> {

    console.log("in another middleware");
    console.log(adminData.product);
    res.sendfile('./views/shop.html');

};