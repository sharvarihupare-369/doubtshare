const express = require("express");
const studentRouter = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const StudentModel = require("../models/studentModel");

studentRouter.get("/", async (req, res) => {
  try {
    const allstudents = await StudentModel.find();
    res.status(200).send(allstudents);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


studentRouter.post("/create", authMiddleware, async (req, res) => {
  try {
    const studentProfile = await StudentModel.create({
      userId: req.userId,
      ...req.body,
    });
    res.status(200).send(studentProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

studentRouter.patch("/update", authMiddleware, async (req, res) => {
  try {
    const updatedstudentProfile = await StudentModel.findOneAndUpdate(
      {
        userId: req.userId,
      },
      req.body,
      { new: true }
    );
    res.status(200).send(updatedstudentProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});



module.exports = { studentRouter };
