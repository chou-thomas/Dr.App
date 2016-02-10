myApp.factory('appointmentFactory',function($http){
	var stuff = [];

	var factory = {};

	factory.getAppointments = function (callback){
		$http.get('/appointments').success(function(output){
				callback(output);
			})	
		}

	factory.addAppointment = function(info, callback) {
		$http.post('/addappointment', info).success(function(output){
			if(output.msg){
				alert(output.msg);
			}
			else{
			callback();}
		})
	}

	factory.delete_appointment = function(info, callback) {
		console.log(info);
		$http.post('/deleteappointment', {'id':info}).success(function(output){
			callback(output);
		})
	}
    // most important step: return the object so it can be used by the rest of our angular code
    return factory;
});



myApp.controller('appointmentController', function ($scope, appointmentFactory, userFactory, $location){
    //  initialize an empty array so $scope.orders maintains a consistent data type
    $scope.appointments = [];
    $scope.users =[];
    $scope.current_user = userFactory.name;
    appointmentFactory.getAppointments(function (data){
        $scope.appointments = data;
        console.log(data);
    })

	$scope.addAppointment = function() {
		$scope.new_appointment.date = new Date();
		$scope.new_appointment.name = $scope.current_user;
		appointmentFactory.addAppointment($scope.new_appointment, function(){//callback
			appointmentFactory.getAppointments(
				//callback
				function(data){
				console.log(data);
				if(data.msg){
					$location.path('/new_appointments');
				}
				else{
				$scope.appointments = data;
				$scope.new_appointment = {};
				$location.path('/appointments');
			}
			});
		})
	}

	$scope.deleteAppointment = function(id) {
		console.log(id);
		appointmentFactory.delete_appointment(id, function(data){
		appointmentFactory.getAppointments(function (data){
		$scope.appointments = data;
			})
			console.log(data);
			$scope.appointments = data;
		})
	}
    

})