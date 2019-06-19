exports.error=(req,res,next)=>{
    // res.status(404).sendfile('./views/404.html');
    res.status(404).render('404',{pagetitle:'Page Not Found'});
};