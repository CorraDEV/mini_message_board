const express = require('express');
const app = express();
const port = 8080;
const formRoute = require('./routes/formRoute');
const messageBoardRoute = require('./routes/messageBoardRoute');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/new', formRoute); 
app.use('/', messageBoardRoute); 

app.listen(port);