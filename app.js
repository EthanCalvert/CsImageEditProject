const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();

const expressEjsLayout = require('express-ejs-layouts')
const flash = require('connect-flash');
const session = require('express-session');
const passport = require("passport");



app.use(express.static('./public'));
app.use(express.static('./public/views'));
app.use(express.static('./public/views/images'));

//passport config:
require('./config/passport')(passport)
//mongoose
//mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
mongoose.connect('mongodb://localhost:27017/group10')
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));

//EJS
app.set('views','./public/views');
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
//express session
app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req,res,next)=> {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error  = req.flash('error');
    next();
    })





    
//Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

var bodyParser = require('body-parser');
var routes = require("./routes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('./public'));
app.use(routes);

app.listen(5000, function () {
// app.listen(4010, function () {
  console.log('Example app listening on port 4010!');
});

