const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true,
    useUnifiedTopology: true,});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("connection successfully established");
} )


const exerciserouter = require('./routes/exercise')
const userrouter = require('./routes/user');

app.use('/exercise',exerciserouter);
app.use('/user',userrouter);
 

app.listen(port, () => {
    console.log(`Server is listening to port : ${port}`)
});
