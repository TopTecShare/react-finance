const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('../models');

passport.use(new GoogleStrategy({
    clientID: "189373330737-gaq6pd4a79ebfgrtmviujopcdti56n5e.apps.googleusercontent.com",
    clientSecret: "co5KzcOfyPzE-zJqCWsgXzId",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      //use the profile info (mainly profile id) to check if the user is registered in the DB
    db.User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


passport.use(GoogleStrategy);

module.exports = Googlepassport;
