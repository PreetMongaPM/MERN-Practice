const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
    role,
  });

  const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET);

  res.cookie("token", token);

  return res.status(201).json({
    message: "User registered successfully",
    user,
  });
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (!isUserAlreadyExists) {
    return res.status(401).json("Invalid credentials");
  }
  const user = isUserAlreadyExists;

  const isUserValid = await bcrypt.compare(password, user.password);

  if (!isUserValid) {
    return res.status(401).json("Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("token", token);

  res.status(201).json({ message: "Login successful", user });
};

module.exports = { registerUser, loginUser };
