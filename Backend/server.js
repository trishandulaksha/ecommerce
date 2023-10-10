const express = require('express');
const DBConnect = require('./DBConnection/DBConnect')
const dotenv = require('dotenv').config();
const cors = require('cors');

DBConnect();

const app = express();

const port = process.env.PORT || 8066;

app.use(cors());
app.use(express.json());

app.use("/api/user",require("./Routes/userRoutes"));

app.listen(port,()=>{
    console.log(`listening on port : ${port}`);
})