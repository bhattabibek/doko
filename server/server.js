import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";


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


