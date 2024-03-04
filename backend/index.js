require('dotenv').config();
var express = require('express');
const app = express();
const connectDB = require('./Config/DBConnection')
const mongoose = require('mongoose')


//connect to DB
connectDB();

mongoose.connection.once('open', () => {
    console.log("Connected to Database");
    app.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT))
})