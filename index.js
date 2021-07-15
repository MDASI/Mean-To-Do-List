const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port =process.env.PORT || 3000;
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');
var router = express.Router();
var path=require('path');

router.use(express.static(path.join(__dirname,'public')));
router.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(port, () => console.log('Server started at port : 3000'));

app.use('/employees', employeeController);
