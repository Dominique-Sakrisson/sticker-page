//import express 
const express = require('express');

//using cors like this cause Im supposed to
const cors = require('cors');

//set the port for local development
const port = process.env.PORT || 3000;

//create the app, app is where we define the routes / endpoints
const app = express();

//import sticker data
const { stickers } = require('./data.js');

//do whatever cors does
app.use(cors());

console.log('Hello from your friend, app.js');

//define an endpoint on the '/' path for our 'home'
app.get('/', (req,res) =>{
    //do some sql stuff work with data 
    res.json({greeting: `welcome to the sticker place! go to /stickers to checkem out`})
})
//another endpoint
app.get('/hello', (req, res) =>{
    res.json({key: 'balllin'});
})
app.get('/stickers', (req,res) =>{
    //do some sql stuff work with data 
    res.json({results: stickers})
})
app.get('/stickers/:name', (req,res) =>{
    //do some sql stuff work with data 

    const name = req.params.name;
    console.log(name);

    const selectedSticker = stickers.find((sticker) => sticker.name === name);

    res.json({results: selectedSticker})
})

module.exports = {
    app
}
