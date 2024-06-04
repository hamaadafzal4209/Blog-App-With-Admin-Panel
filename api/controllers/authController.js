import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    next(errorHandler(401, "All fields are required!"));
  }

  const checkEmail = await userModel.findOne({ email });
  if (checkEmail) {
    next(errorHandler(401, "Email already in use!"));
  }

  const checkusername = await userModel.findOne({ username });
  if (checkusername) {
    next(errorHandler(401, "Username already in use!"));
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  try {
    const user = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    await user.save();

    res.json("user created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(401, "All fields are required!"));
  }

  try {
    const validUser = await userModel.findOne({ email });

    if (!validUser) {
      return next(errorHandler(404, "User not found!"));
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);

    if (!validPassword) {
      return next(errorHandler(404, "Invalid password!"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc; // hide password from the object

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
      })
      .json(rest);

    res.status(200).json("Login succesful!");
  } catch (error) {
    next(errorHandler({ message: error.message }));
  }
};
