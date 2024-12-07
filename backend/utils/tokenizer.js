const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.SECRET_KEY;

function setUser(user) {
  const payload = {
    _id: user._id,
    username: user.username,
  };
  return jwt.sign(payload, secret, { expiresIn: "1h" });
}

function getUser(token) {
  // verifies token and returns decoded user
  try {
    return jwt.verify(token, secret);
  } catch {
    return null;
  }
}

module.exports = { setUser, getUser };
