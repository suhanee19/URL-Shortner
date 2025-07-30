import mongoose from "mongoose";
import "dotenv/config";
async function connectToDB() {
    try {
    await mongoose.connect(process.env.DB); // Using .env
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect:", err.message);
  }
}

export default connectToDB;