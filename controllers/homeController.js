exports.home = (req, res) => {
  res.render("welcome", {
    pageName: "Home",
  });
};
