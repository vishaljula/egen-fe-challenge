(function() {
  'Use Strict';

  angular.module('egenApp')
  .controller('listController', function($scope, $http, $location, SharedService) {
    $scope.message1 = "Users";
    $scope.message3 = "Add User";
    $http.get('/userlist')
      .success(function(response) {
        console.log("I got the data I requested");
        $scope.userlist = response;
      });
    $scope.goToMain = function() {
      $location.path('/');
    };
    $scope.goToCreate = function() {
      $location.path('/create');
    };
    $scope.addUser = function() {
      console.log($scope.user);
    };

    $scope.addUser = function() {
      console.log($scope.user);
      $http.post('/userlist', $scope.user).success(function(response) {
        $location.path('/');
      });
    };

    $scope.selectUser = function() {
      $location.path('/profile');
      $scope.selected = this.user;
      SharedService.recordUser($scope.selected);
    };
  });

})();