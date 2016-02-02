myApp.factory('userFactory', function($http){
	var users = [];
	var name;
	// var appointment_id;
	var factory = {};

    // factory.getUsers = function (callback){
    //     $http.get('/users').success(function(output){
    //         callback(output);
    //     })
    // }

    factory.addUser= function(info, callback){
        this.name = info.name;
        // this.appointment_id = info.appointment_id;
        $http.post('/adduser', info).success(function(name_exists){
            callback(name_exists);
        })
    }
    // name = self.name;
    return factory;
});

myApp.controller('usersController', function ($scope, userFactory, $location){
    // userFactory.getUsers(function(data){
    //     $scope.users = data;
    // });

    $scope.addUser = function (){
        if($scope.new_user == undefined || $scope.new_user.name == '' ){
            $scope.noname = 'Please Enter a Name';
        }
        else{
            // $scope.new_user.appointment_id = $scope.users.length;
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