// testConnection.js
import mongoose from "mongoose";

// Your MongoDB URI (copy from .env or paste directly)
const MONGODB_URI = "mongodb+srv://afsheensandhu0_db_user:RbedSd8ix4s8xH62@exclusivecluster.ijyj077.mongodb.net/Exclusive?retryWrites=true&w=majority";

async function testConnection() {
  try {
    const conn = await mongoose.connect(MONGODB_URI);
    console.log("🎉 MongoDB connected:", conn.connection.name);
    process.exit();
  } catch (err) {
    console.error("❌ Connection failed:", err);
    process.exit(1);
  }
}

testConnection();
