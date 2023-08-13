const express = require ('express');
const app = express();

const dotenv = require ('dotenv');
dotenv.config();
const  PORT = process.env.PORT || 1000;

const database = require ('./database/dbConn');
const userData = require ('./model/userSchema');
const route = require ('./router/route');
const cors = require ('cors');

app.use(express.json());
app.use(cors());
app.use('', route);


app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port no : ${PORT}`);
})
