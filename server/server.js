const express = require('express');
const cors = require ('cors');
const dotenv = require('dotenv');
const indexRoutes = require('./routes/index');

const app = express()                       //to create an Express Application
app.use(cors());                            //Adding cors to the express application
app.use(express.json());                   //a middleware function to parse the incoming requests with JSON payloads
dotenv.config({ path: './config.env'});
const PORT = process.env.PORT;
require('./config/db');
app.use(indexRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})