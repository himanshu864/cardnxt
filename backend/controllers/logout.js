const handleLogout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/admin/login");
};

module.exports = { handleLogout };
