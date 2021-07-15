const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port =process.env.PORT || 30000;
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var router = express.Router();
var path=require('path');
var app=express();




app.use(bodyParser.json());

app.use(express.static(path.join(__dirname,'public')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(port, () => console.log(`Server started at port : ${port}`));

app.use('/employees', employeeController);
