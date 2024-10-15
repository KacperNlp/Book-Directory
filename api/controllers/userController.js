import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const registerUser = async (req, res) => {
  try {
    const isUserExist = await User.findOne({
      email: req.body.email,
      nick: req.body.nick,
    });

    if (isUserExist) {
      return res
        .status(400)
        .json({ error: "Email or nickname already exists" });
    }

    const hashedPAssword = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      name: req.body.name,
      surname: req.body.surname,
      nick: req.body.nick,
      email: req.body.email,
      password: hashedPAssword,
    });

    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, "secret", {
      expiresIn: "12h",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'lax'
    }).status(201).json({ message: "User registered successfully" });
  } catch (ex) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ nick: req.body.nick });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials!" });
    }

    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    const token = jwt.sign({ email: user.email }, "secret", {
      expiresIn: "12h",
    });
    
    return res
    .cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: 'lax'
    })
    .status(200)
    .json({ message: "Logged in successfully 😊" });
  } catch (ex) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export { registerUser, loginUser };
