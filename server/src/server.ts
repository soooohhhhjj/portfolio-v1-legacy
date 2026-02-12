import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // load .env

const app = express();

// ✅ Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI!, {
  serverSelectionTimeoutMS: 5000
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));


// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
