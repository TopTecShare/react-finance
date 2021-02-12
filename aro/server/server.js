require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./config/connection');
const passport = require('./config/passport');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8090;
// require('./passport-setup');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/build')));

// Passport
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser
app.use(session({
  secret: 'my_secret', // process.env.AUTH_SECRET,
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/'))
});

// Add Auth and API routes
app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/apiRoutes'));

// If no routes are hit, send the React app
app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

// Error handler
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
})

// app.get('/', (req, res) => res.send('you are not logged in!'))
// app.get('./failed', (req, res) => res.send('Failed to login'))
// app.get('./good', (req, res) => res.send(`Welcome ${req.user.displayName}!`))


// app.get('/google',passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/good');
//   });

// app.get('/logout', (req, res) => {
//     req.session = null;
//     req.logout();
//     res.redirect('/');
// })  

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`);
});
