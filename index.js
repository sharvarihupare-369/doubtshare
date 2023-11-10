const express = require("express");
const app = express();
const connection = require("./db");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/userRouter");
const { doubtRouter } = require("./routes/doubtRouter");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth',userRouter);
app.use('/api/doubts',doubtRouter);

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
})

app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to DB...");
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is listening on port ${port}`);
})