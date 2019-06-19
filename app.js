http=require('http');
path=require('path');

express=require('express');
bodyparser=require('body-parser');

const app=express();
app.set('view engine','ejs');
 app.set('views','views');
 const  errorCode=require('./controllers/error');
const admindata=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(admindata.router);
app.use(shopRoutes);

app.use(errorCode.error);

const server=http.createServer(app);
server.listen(3000);

