// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../middlewares/ensureAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      console.log('approved')
      res.redirect("/signup");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/mainpage", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "/signup.html"));
  });

  app.get("/signup", (req, res) => {
    if (req.user) {
      console.log('approved')
      res.redirect("/login");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/calendar", (req, res) => {
    if (req.user) {
      res.sendFile(path.join(__dirname, "../public/calendar.html"));
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });

  app.get("/admin-dashboard", isAdmin, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/admin-dashboard.html"));
  });

  app.get("/admin-login", (req, res) => {
    if (req.user) {
      if (req.user.isAdmin) {
        res.redirect("/admin-dashboard");
      }
      res.sendFile(path.join(__dirname, "../public/admin-login.html"));
    }
    res.sendFile(path.join(__dirname, "../public/admin-login.html"));
  });
};