const bcrypt = require("bcrypt");

const User = require("../models/users.js");

const asyncHandler = require("../utils/asyncHandler.js");

const handleSignup = asyncHandler(async (req, res) => {
  const hashedPassword = await bcrypt.hash("ankit", 10);

  const admin = await User.create({
    username: "admin",
    password: hashedPassword,
  });

  return res.json(admin);
});

module.exports = { handleSignup };
