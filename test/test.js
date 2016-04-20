describe("True", function() {

  beforeEach(function() {
    module('egenApp');
    inject(function(_SharedService_) {
        service = _SharedService_;
    });
  });

  it ('-Service is defined', function() {
      expect(service).toBeDefined();
  });

  it ('-Service has the function recordUser', function() {
      expect(angular.isFunction(service.recordUser)).toBe(true);
  });

  it ('-Service has the function selectedUser', function() {
      expect(angular.isFunction(service.selectedUser)).toBe(true);
  });

  it("Should be true", function() {
    expect(true).toBeTruthy();
  });
});