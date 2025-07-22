import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import recordsRoutes from "./routes/records.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/records", recordsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
