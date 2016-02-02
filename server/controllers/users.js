var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {

	// all: function(req, res){
	// 	User.find({}, function(err,users){
	// 		if(err){
	// 			console.log('Error in All method of users.js controller');
	// 		} else{
	// 			res.json(users);
	// 		}
	// 	})
	// },

	create: function(req, res){
		var user = new User({name: req.body.name});
			user.save(function(err){
				if(err){
					res.json({'msg': 'Error Occurred, Try Again'});
				} else{
					res.json();
				}
			})
	}
}

