import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import dashboardRoutes from"./routes/dashboard.route.js";

const app = express(); 
app.use(express.json());  
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

dotenv.config();






// Register your routes properly
app.use("/api/auth", authRoutes);
 // You forgot to add the route handler here

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));

