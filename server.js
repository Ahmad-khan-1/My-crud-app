const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const writerRoutes = require("./routes/writerRoutes");
require("dotenv").config();

//middle ware
app.use(cors());
app.use(express.json());
app.use("/writers", writerRoutes);

//connect to Mongodb

mongoose
  .connect(mongoose.connect(process.env.MONGO_URI))
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));
// crud Routes
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
