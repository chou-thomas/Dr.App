myApp.factory('userFactory', function($http){
	var users = [];
	var name;
	var factory = {};

    factory.addUser= function(info, callback){
        this.name = info.name;
        $http.post('/adduser', info).success(function(name_exists){
            callback(name_exists);
        })
    }
 
    return factory;
});

myApp.controller('usersController', function ($scope, userFactory, $location){

    $scope.addUser = function (){
        if($scope.new_user == undefined || $scope.new_user.name == '' ){
            $scope.noname = 'Please Enter a Name';
        }
        else{
            userFactory.addUser($scope.new_user, 
                function(name_exists){
                $scope.name_exists = name_exists.msg;
                if(name_exists){
                    $location.path('/');
                }
                else{
                    $location.path('/appointments');
                }
            })
        }
        
    }

})