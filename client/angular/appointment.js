//Angular code for creating, adding, getting appointments
//File is acquired into the index.html file
//appointment.html view partials can also use the methods, and controllers from the appointment.js
//This file uses callbacks and uses the routes file to connect to the backend code.

//Start of the appointment Factory
//passes 
myApp.factory('appointmentFactory',function($http){
	var factory = {};
	factory.getAppointments = function (callback){
		console.log(callback);
		$http.get('/appointments').success(function(output){
				callback(output);
			})	
		}

	factory.addAppointment = function(info, callback) {
		console.log(info);
		$http.post('/addappointment', info).success(function(output){
			if(output.msg){
				alert(output.msg);
			}
			else{
			callback();}
		})
	}

	factory.delete_appointment = function(info, callback) {
		$http.post('/deleteappointment', {'id':info}).success(function(output){
			callback(output);
		})
	}
// most important step: return the object so it can be used by the rest of our angular code
    return factory;
});


//Start of the appointment Controller, takes in data from the specific factory method as an object
myApp.controller('appointmentController', function ($scope, appointmentFactory, userFactory, $location){

//  initialize an empty array so $scope.appointments maintains a consistent data type
    $scope.appointments = [];
    $scope.users =[];
    $scope.current_user = userFactory.name;
    appointmentFactory.getAppointments(function (data){
        $scope.appointments = data;
    })

	$scope.addAppointment = function() {
		$scope.new_appointment.date = new Date();
		$scope.new_appointment.name = $scope.current_user;
		appointmentFactory.addAppointment($scope.new_appointment, function(){
			appointmentFactory.getAppointments(
				//callback
				function(data){
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
		appointmentFactory.delete_appointment(id, function(data){
		appointmentFactory.getAppointments(function (data){
		$scope.appointments = data;
			})
			$scope.appointments = data;
		})
	}
    
})