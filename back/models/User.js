var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// user Schema
var UserSchema = mongoose.Schema({
  first_name:  { type: String, required: true },
  last_name:   { type: String, required: true },
  email:       { type: String, required: true },
  gender:      { type: String, required: true }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
