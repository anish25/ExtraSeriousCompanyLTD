const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
});

app.use(express.json());
//>>>Model routers
const userRouter = require('./routes/users');
const incidentRouter = require('./routes/incidents');
const commentRouter = require('./routes/comments');

app.use('/users',userRouter);
app.use('/incidents',incidentRouter);
app.use('/comments',commentRouter);

//<<<<<<model routers
app.use(cors);


app.listen(port,()=>{
    console.log(`Server is running on port: ${port} `);
});
