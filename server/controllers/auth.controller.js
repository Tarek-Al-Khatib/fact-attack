import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, password, age } = req.body;

  try {
    if (!username || !password) {
      return res.status(500).send({
        message: "All feilds are required",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      age,
      password: hashed,
    });

    return res.json(user);
  } catch (error) {
    console.log(error.message);

    return res.status(500).send({
      message: "Something went wrong",
    });
  }
};
