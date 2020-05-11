const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

const todoRouter = require('./routes/Todo');
const userRouter = require('./routes/user');



app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use('/',todoRouter);
app.use('/user',userRouter);

app.listen(3000, function() {
    console.log('listening on 3000')
})

module.exports = app;

