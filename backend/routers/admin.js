const express = require("express");
const router = express.Router();

const { handleLogin } = require("../controllers/login");
const { handleLogout } = require("../controllers/logout");
const { restrictUnauthenticated } = require("../middlewares/unauth");

router.post("/login", handleLogin);

router.get("/login", (req, res) => {
  return res.json({ redirect: "/" }); // Redirect handled by React Router
});

router.get("/logout", handleLogout);

// Admin portal to upload images
router.get("/", restrictUnauthenticated, (req, res) => {
  return res.json({ message: "ACCESS GRANTED" });
});

module.exports = router;
