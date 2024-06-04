import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js'

const app = express();

dotenv.config();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database is connected!");
    })
    .catch((err) => {
        console.log(err.message);
    })

// import routes
app.use("/api/user/", userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})