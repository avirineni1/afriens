var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  _id: String,
  firstname: String,
  lastname: String,
	email: String,
	phone: String,
  address: [{ street: String, apt: String, city: String, state: String, zip: String }]
});

mongoose.model('User', UserSchema);