const { getUser } = require("../utils/tokenizer.js");

function restrictUnauthenticated(req, res, next) {
  const token = req.cookies?.token;
  if (!token) return res.json({ error: "ACCESS RESTRICTED" });

  const user = getUser(token);
  if (!user) return res.json({ error: "INVALID PASSKEY" });

  req.user = user;
  next();
}

module.exports = { restrictUnauthenticated };
