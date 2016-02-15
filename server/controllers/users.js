var mongoose = require('mongoose');
// using the user model from the user schema
var User = mongoose.model('User');
module.exports = {

	create: function(req, res){
		var user = new User({name: req.body.name});
			user.save(function(err, data){
				if(err){
					res.json({'msg': 'Error Occurred, Try Again'});
				} else{
					res.json();
				}
			})
	}
}

