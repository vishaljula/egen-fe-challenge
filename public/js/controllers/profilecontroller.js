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