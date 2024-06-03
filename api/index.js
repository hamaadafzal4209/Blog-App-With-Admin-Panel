import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.i4zb5ta.mongodb.net/mern-blog-app-with-admin-panel?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("Database is connected!");
    })
    .catch((err) => {
        console.log(err.message);
    })


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})