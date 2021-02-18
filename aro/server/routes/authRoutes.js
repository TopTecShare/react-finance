const router = require('express').Router();
const passport = require('../config/passport');
const authController = require('../controllers/authController');
// const googlepassport = require('../config/passport-setup')

router.get('/user', authController.getUser)
router.post('/login', authController.auth, passport.authenticate('local'), authController.authenticate);
router.post('/logout', authController.logout);
router.post('/signup', authController.register);

module.exports = router;
