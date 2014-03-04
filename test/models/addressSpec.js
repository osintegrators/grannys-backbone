define(['js/models/address', 'test/fixtures/address'], function(AddressModel, AddressFixture){

  describe('A model', function(){
    it('should have certain defaults', function(){
      var address = new AddressModel();
      expect(address.get("firstName")).toBe("Jane");
    })

    it('should take fixture json', function(){
      var address = new AddressModel(AddressFixture);
      expect(address.get('firstName')).toBe(AddressFixture.firstName);
      expect(address.get('lastName')).toBe(AddressFixture.lastName);
      expect(address.get('twitter')).toBe(AddressFixture.twitter);
    });
  });

});
