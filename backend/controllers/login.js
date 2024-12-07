const bcrypt = require("bcrypt");

const User = require("../models/users");

const asyncHandler = require("../utils/asyncHandler");
const { setUser } = require("../utils/tokenizer");

const handleLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const admin = await User.findOne({ username });
  if (!admin)
    return res.status(401).json({ message: "Invalid Username or password!" });

  const isValid = await bcrypt.compare(password, admin.password);
  if (!isValid)
    return res.status(401).json({ message: "Invalid Username or password!" });

  const token = setUser(admin);

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3600000,
  });

  return res.status(200).json({ redirect: "/admin" });
});

module.exports = { handleLogin };
