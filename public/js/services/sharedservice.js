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