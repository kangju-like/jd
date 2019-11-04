var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var bodyParser = require('body-parser');



// var setuserRouter = require("./routes/setuser")
var app = express();

app.all('*',  function (req,  res,  next)  {   //响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源 
         res.header("Access-Control-Allow-Origin",  "*");    
    res.header("Access-Control-Allow-Headers",   " Origin, X-Requested-With, Content-Type, Accept");     //允许请求资源的方式
        
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");    
    res.header("X-Powered-By",  ' 3.2.1');    
    res.header("Content-Type",  "application/json;charset=utf-8");    
    next();   });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// app.use(bodyParser());
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
// app.use('/setuser', setuserRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
//设置跨域访问
// app.listen(8083,function(){//监听8083端口
//   console.log("服务开启成功");
// });
// app.all('*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });


app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;