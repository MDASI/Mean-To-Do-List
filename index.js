const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port =process.env.PORT || 3000;
const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'https://gifted-johnson-8f047e.netlify.app/' }));

app.listen(port, () => console.log('Server started at port : 3000'));


app.use('/employees', employeeController);