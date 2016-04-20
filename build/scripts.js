(function() {
  'Use Strict';

  angular.module('egenApp', ['ngRoute', 'ngMessages']);

  angular.module('egenApp').config(function($routeProvider) {

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
  });
})()


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
(function() {
  'Use Strict';

  angular.module('egenApp')
  .controller('secondController', function($scope, SharedService, $http, $location) {
    $scope.user = SharedService.selectedUser();
    $scope.goToMain = function() {
      $location.path('/');
    };
    $scope.message2 = "User Details";
    $scope.remove = function(id) {
      console.log(id);
      $http.delete('/userlist/' + id).success(function(response) {
        $location.path('/');
      });
    };
  });
})();
(function() {
  'Use Strict';

  angular.module('egenApp').service('SharedService', function() {
    var sharedUser;
    this.recordUser = function(user) {
      sharedUser = user;
    };
    this.selectedUser = function() {
      return sharedUser;
    };
  });
})();