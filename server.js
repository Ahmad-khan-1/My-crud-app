const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const connectDB = require("./db");
const writerRoutes = require("./routes/writerRoutes");
require("dotenv").config();

//middle ware
app.use(cors());
app.use(express.json());
app.use("/writers", writerRoutes);

//connect to Mongodb
connectDB();

// crud Routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("🚀 Server running on port 5000"));
