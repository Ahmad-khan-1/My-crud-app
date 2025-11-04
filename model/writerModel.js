const mongoose = require("mongoose");

const writerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: Number,
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Writer = mongoose.model("Writer", writerSchema);
module.exports = Writer;
