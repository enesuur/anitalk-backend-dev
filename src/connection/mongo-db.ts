import mongoose from "../lib/mongoose";
import CONFIG from "../config";

const connectMongoDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(CONFIG.MONGO_URI);

    console.log(`--MongoDB connected!`);
    console.log(`--HOST:${conn.connection.host}`);
    console.log(`--PORT:${conn.connection.port}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.error("Unknown error during MongoDB connection.");
    process.exit(1);
  }
};

export default connectMongoDB;
