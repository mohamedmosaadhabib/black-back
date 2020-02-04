let express = require('express');
let app = express();
let bodyParser=require('body-parser');
let mongoose = require('mongoose');
let dotenv = require('dotenv');
let port = process.env.PORT ||  3000;

// setting
dotenv.config();

mongoose.connect(process.env.DB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify:false
    }
    ,(err)=>{
    if (err) console.error(err);
    else console.log('Connected Database')
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
// routes
let authRouter = require('./routes/user/auth');
let userRouter = require('./routes/user/user');
app.use('/api/user',authRouter);
app.use('/api/user',userRouter);

app.get('/',function (req,res) {
    return res.json({message:"Welcome to our page"});
});

app.listen(port,()=>{
    console.log('Web site is running in url : http://localhost:'+port)
});