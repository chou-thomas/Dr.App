var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html'
	})
	.when('/appointments',{
		templateUrl: 'partials/appointment.html'
	})
	.when('/new_appointments',{
		templateUrl: 'partials/new_appointment.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});