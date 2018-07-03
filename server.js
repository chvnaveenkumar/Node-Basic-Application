const express = require('express');
const ejs = require('ejs');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next) => {
next();
});

app.get('/',(req,res) => {
res.render('home.ejs',{
    title:"Home Page title"
});
});

app.get('/about',(req,res)=>{
    res.render('about.ejs',{
        title:"About Page title",
        current_year: new Date().getFullYear()
    });

});

app.get('/bad',(req,res)=>{
res.send({
    errorMessage: 'Unable to handle the request'
});
});

app.listen(3000,() => {
    console.log('server is running 3000')
});