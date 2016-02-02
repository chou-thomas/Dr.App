var mongoose = require('mongoose');

var AppointmentSchema = new mongoose.Schema({
	date: Date,
	time: String,
	name: String,
	complain: String
});

var Appointment = mongoose.model('Appointment', AppointmentSchema);