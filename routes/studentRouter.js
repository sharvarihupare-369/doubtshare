const express = require("express");
const studentRouter = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");

studentRouter.get("/", async (req, res) => {
  try {
    const alltutors = await TutorModel.find();
    res.status(200).send(alltutors);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});


studentRouter.post("/create", authMiddleware, async (req, res) => {
  try {
    const tutorProfile = await TutorModel.create({
      userId: req.userId,
      ...req.body,
    });
    res.status(200).send(tutorProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

studentRouter.patch("/update", authMiddleware, async (req, res) => {
  try {
    const updatedtutorProfile = await TutorModel.findOneAndUpdate(
      {
        userId: req.userId,
      },
      req.body,
      { new: true }
    );
    res.status(200).send(updatedtutorProfile);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});



module.exports = { studentRouter };
