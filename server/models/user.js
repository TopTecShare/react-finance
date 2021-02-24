const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true }
});

// Define schema methods
userSchema.methods = {
	checkPassword: function(inputPassword) {
		console.log('inputPassword', inputPassword)
		return bcrypt.compareSync(inputPassword, this.password);
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10);
	}
}

// Define hooks for pre-saving
userSchema.pre('save', function(next) {
	if (!this.password) {
		console.log('No password provided!');
		next();
	} else {
		this.password = this.hashPassword(this.password);
    next();
  }
});

//User.prototype.validPassword = function(password) {
  //  return bcrypt.compareSync(password, this.password);
//};

// Create reference to User & export
const User = mongoose.model('User', userSchema);
module.exports = User;
