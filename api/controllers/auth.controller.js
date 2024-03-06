import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    console.log(newUser);
    await newUser.save();
  } catch (err) {
    res.status(500).json(err.message);
  }
  res.status(200).json("User created successfully");
};
