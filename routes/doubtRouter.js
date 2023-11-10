const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const doubtRouter = express.Router();

doubtRouter.get('/history',authMiddleware,async(req,res)=>{
    
})

module.exports = {doubtRouter};