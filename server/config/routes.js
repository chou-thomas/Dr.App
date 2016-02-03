var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
var appointments = require('../controllers/appointments.js');
var User = mongoose.model('User');
var users = require('../controllers/users.js');

module.exports = function(app){

	app.post('/addappointment', function(req, res){
		appointments.create(req,res);
	})

	// app.get('/appointments/:id', function(req, res){
	// 	appointments.find_one(req, res);
	// });

	app.get('/appointments', function(req, res){
		appointments.all(req, res);
	});


	// // app.get('/users', function(req, res){
	// 	users.all(req,res);
	// });

	app.post('/adduser', function(req, res){
		users.create(req, res);
	})

	app.post('/deleteappointment', function(req, res){
		appointments.remove(req, res);
	})


}