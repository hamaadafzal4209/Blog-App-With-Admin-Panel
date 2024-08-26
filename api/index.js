import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import cookieParser from "cookie-parser";
import path from "path";

const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());

dotenv.config();
const PORT = process.env.PORT;

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is connected!");
  })
  .catch((err) => {
    console.log(err.message);
  });

const __dirname = path.resolve();

// import routes
app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);
app.use("/api/post/", postRoutes);
app.use("/api/comment/", commentRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// listening server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
