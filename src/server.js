require('dotenv').config();
const express = require('express'); //commomjs
//const path  = require('path'); //commom js
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');
const connection = require('./config/database');

//import express from 'express';
//console.log(">>> chec env", process.env);

const app = express(); //app express
const port = process.env.PORT || 8888;   //port
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended: true})) //for from data

//config template engine
configViewEngine(app);

//khai bao router
app.use('/',webRouter);

//simple query
connection.query(
  'select * from Person',
  function (err,results,field){
    console.log(">>>>Result= ",results);
  }
);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})