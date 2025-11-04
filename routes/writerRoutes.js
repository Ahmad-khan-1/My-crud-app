const express = require("express");
const router = express.Router();
const Writer = require("../model/writerModel");

router.post("/", async (req, res) => {
  try {
    const writer = await Writer.create(req.body);
    res.json(writer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const writers = await Writer.find(); // get all data from DB
    res.json(writers); // send it to browser
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const writerId = req.params.id;
    const updateWriter = req.body;

    const response = await Writer.findByIdAndUpdate(writerId, updateWriter, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
