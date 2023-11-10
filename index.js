const express = require("express");
const connection = require("./db");
const { userRouter } = require("./routes/userRouter");
const app = express();
require("dotenv").config()
const cors = require("cors")
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRouter)

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.listen(port,async()=>{
    try {
        await connection
        console.log("Connected to DB...")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is listening on port ${port}`)
})