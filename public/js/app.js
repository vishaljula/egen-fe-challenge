var egenApp = angular.module('egenApp', ['ngRoute', 'ngMessages'])
						.config(function($routeProvider) {

							//set up routes
							$routeProvider
							  .when('/', {
							  	templateUrl: 'partials/main.html',
							  	controller: 'listController'
							  })
							  .when('/profile', {
							  	templateUrl: 'partials/profile.html',
							  	controller: 'secondController'
							  })
							  .when('/create', {
							  	templateUrl: 'partials/create.html',
							  	controller: 'listController'
							  })
						})
						.service('SharedService', function() {
							var sharedUser;
							this.recordUser = function(user) {
								sharedUser = user;
							};
							this.selectedUser = function() {
						        return sharedUser;
						    };
						})
						.controller('secondController', function($scope, SharedService, $http, $location) {
							$scope.user = SharedService.selectedUser();
              $scope.goToMain = function() {
                $location.path('/');
              };
              $scope.message2 = "User Details";
							$scope.remove = function(id){
			                    console.log(id);
			                    $http.delete('/userlist/' + id).success(function(response){
			                      $location.path('/');
			                    });
			                  };
						});