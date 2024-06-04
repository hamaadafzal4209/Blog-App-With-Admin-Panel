import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
    ) {
        next(errorHandler(401, 'All fields are required!'));
    }
    
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
        next(errorHandler(401, 'Email already in use!'));
    }
    
    const checkusername = await userModel.findOne({ username });
    if (checkusername) {
        next(errorHandler(401, 'Username already in use!'));
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    try {

        const user = await userModel.create({
            username,
            email,
            password: hashPassword,
        });

        await user.save();

        res.json('user created successfully');

    } catch (error) {
        next(error);
    }
};
