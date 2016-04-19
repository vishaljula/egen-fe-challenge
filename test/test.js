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

  it("Should be true", function() {
    expect(true).toBeTruthy();
  });
});