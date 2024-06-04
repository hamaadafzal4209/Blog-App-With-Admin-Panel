import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
// middlewares
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;

// database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database is connected!");
    })
    .catch((err) => {
        console.log(err.message);
    })

// import routes
app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);

// listening server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})