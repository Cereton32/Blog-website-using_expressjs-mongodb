

require('dotenv').config(); //it will fetch .env  file into process.env
const connectDB = require('./server/config/db')
connectDB()
const express = require('express')
const app= express()

const expressLayout = require('express-ejs-layouts')

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//adding templeting engine
app.use(expressLayout);
app.set('layout','./layout/main');
app.set('view engine','ejs');


app.get('/',require('./server/routes/main'))
//for admin i will do tghis
app.get('/admin',require('./server/routes/admin'))
app.get('/ABOUT',require('./server/routes/main'))
app.get('/contact',require('./server/routes/main'))
app.get('/post/:id',require('./server/routes/main'))
app.post('/search',require('./server/routes/main'))








//starting the server present there 
app.listen(process.env.PORT,()=>{
 console.log('connection established ')
})