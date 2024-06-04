import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
    ) {
        return res.status(400).json("Required all fields!");
    }

    const checkEmail = await userModel.findOne({email});
    if(checkEmail) {
        return res.status(400).json("Email already in use!");
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
        console.log({ message: error.message });
    }
};
