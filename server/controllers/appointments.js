var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
module.exports = {

	all: function(req, res){
		Appointment.find({}, function(err,appointment){
			console.log("hello World");
			if(err){
				console.log('Error in All method of appointment.js controller');
			} else{
				res.json(appointment);
			}
		})
	},

	create: function(req, res){
		var appointment = new Appointment({name: req.body.name, time: req.body.time, complain: req.body.complain, date: req.body.date});
		console.log(appointment);
		Appointment.find({name: req.body.name}, function(err, appointments){
			if(err){
			} if(appointments[0]){
				res.json({'msg': 'appointment already exists'});
			} 
			else {
				appointment.save(function(err){
					if(err){
						console.log('Error in Create method of appointment.js controller');
					} else{
						res.json();
					}
				})
			}
		})
	},

	remove: function(req, res){
		console.log(req.body._id);
		Appointment.remove({_id: req.body.id}, function(err){
			if(err){
				console.log('Error in Remove method of appointment.js controller');
			} else{
				res.json();
			}
		})
	}


}