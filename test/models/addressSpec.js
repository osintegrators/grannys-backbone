define(['js/models/address', 'test/fixtures/address'], function(AddressModel, AddressFixture){

  describe('An address model', function(){
    it('should have certain defaults', function(){
      var address = new AddressModel();
      expect(address.get("firstName")).toBe("Jane");
    })

    describe('should have required fields: ', function(){
      it('first name', function(){
        var address = new AddressModel(AddressFixture);

        address.unset('firstName');
        expect(address.isValid()).toBe(false);

        address.set('firstName', AddressFixture.firstName);
        expect(address.isValid()).toBe(true);

      });
      it('last name', function(){
        var address = new AddressModel(AddressFixture);

        address.unset('lastName');
        expect(address.isValid()).toBe(false);

        address.set('lastName', AddressFixture.lastName);
        expect(address.isValid()).toBe(true);

      });
    });
  });

});
