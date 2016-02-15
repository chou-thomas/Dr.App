var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	appointment_id: Number
});

UserSchema.path('name').required(true, 'Name cannot be blank');

var User = mongoose.model('User', UserSchema);

// mongoose.js file will automatically get all the schemas and eporting them