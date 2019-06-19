http=require('http');
path=require('path');

express=require('express');
bodyparser=require('body-parser');

const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
   res.status(404).sendfile('./views/404.html');
});

const server=http.createServer(app);
server.listen(3000);

