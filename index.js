const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on');

//create an instane of express app
let app = express();

//set the view engine
app.set('view engine', 'hbs');

//static folder
app.use(express.static('public'));

//setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

//enable forms
app.use(
    express.urlencoded({
        extended: false
    })
)

// './' means same directory as current index.js
const landingRoutes = require('./routes/landing');
app.use('/', landingRoutes)

// app.use('/', require('./routes.landing'))

// app.get('/', function(req,res){
//     res.send('hello')
// })

app.listen('4000', function(){
    console.log('server started')
})