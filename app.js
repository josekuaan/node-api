

const routes = require('./routes')
const users = require('./routes/user');
const http = require('http');
const path = require('path');
// const stylus = require('stylus')
const express = require('express');


const app = express();

//all environment
app.set('port', 3000)
app.set('views',path.join(__dirname,'views'))
app.set('views engine', 'jade');
// app.use(express.favicon());
app.use(express.jogger('div'))
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methothOverride())
app.use(app.router);
// app.use(stylus.middleware(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));


//development only

if('development' == app.get('env')){
    app.use(express.errorHandler())
}

app.get('/', routes.index)
app.get('users', user.list)

http.createServer(app).listen(app.get('port', () =>{
    console.log('Express server listinining on port:', + app.get('port'))
}))

// app.get('/',(req,res)=>{
//    res.json({
//        message:'just here tonight learing some node and some express'
//    })
// });

//  app.listen(4000);