require('dotenv').config();
var express = require('express');
const app = express();
const connectDB = require('./Config/DBConnection')
const mongoose = require('mongoose')
const { logger } = require('./middleware/EventLogger');
const errorHandler = require("./Middleware/ErrorHandler")
const corsOptions = require('./Config/CorsOptions')
const cors = require('cors');

//connect to DB & config
connectDB();
app.use(cors(corsOptions));

//middleware
app.use(logger)
app.use(express.json());
//Routes
app.use('/blog', require('./Routes/Blog'))

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log("Connected to Database");
    app.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT))
})