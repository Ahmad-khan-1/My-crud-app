const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const writerRoutes = require("./routes/writerRoutes");

//middle ware
app.use(cors());
app.use(express.json());
app.use("/writers", writerRoutes);

//connect to Mongodb

mongoose
  .connect(
    "mongodb+srv://amanullahqurayshi_db_user:ZATmfNkyr8GF7feS@cluster0.d0c2drt.mongodb.net/my-backend?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error:", err));
// crud Routes
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
