//import express 
const express =require('express');
//using cors like this cause Im supposed to
const cors = require('cors');
//create the app that works to communicate with backend 
const app = express();
const port = process.env.PORT || 3000;

//import pokemon data
const {pokemon} =  require('./data.js');

console.log('Hello from your friend, app.js');

//do whatever cors does
app.use(cors());

app.get('./', (req,res) =>{
    res.send('hello Worldd')
})
module.exports = {
    app
}
