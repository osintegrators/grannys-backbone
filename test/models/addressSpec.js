define(['js/models/address'], function(AddressModel){

  describe('A model', function(){
    it('should have certain defaults', function(){
      var address = new AddressModel();
      expect(address.get("firstName")).toBe("Jane");
    })

  });

});
