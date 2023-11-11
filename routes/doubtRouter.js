const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const DoubtModel = require("../models/doubtModel");
const doubtRouter = express.Router();

doubtRouter.get('/history',authMiddleware,async(req,res)=>{
    const userId = req.userId
    const doubts = await DoubtModel.find({userId})
})

module.exports = {doubtRouter};