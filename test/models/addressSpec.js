define(['js/models/address', 'test/fixtures/address'], function(AddressModel, AddressFixture){

  describe('An address model', function(){
    var address;
    beforeEach(function(){
      address = new AddressModel(AddressFixture);
    });

    it('should have certain defaults', function(){
      var address = new AddressModel();
      expect(address.get("firstName")).toBe("Jane");
    })

    describe('should have required fields: ', function(){
      it('first name', function(){
        address.unset('firstName');
        expect(address.isValid()).toBe(false);

        address.set('firstName', AddressFixture.firstName);
        expect(address.isValid()).toBe(true);

      });
      it('last name', function(){
        address.unset('lastName');
        expect(address.isValid()).toBe(false);

        address.set('lastName', AddressFixture.lastName);
        expect(address.isValid()).toBe(true);
      });
    });

    it('should be able to revert changes', function(){
      address.set('lastName', 'foo');
      address.revertChanges();
      expect(address.get('lastName')).toBe(AddressFixture.lastName);
    });

    it('should be able to update what changes should be reverted', function(){
      address.set('lastName', 'foo');
      address.setOldCopy();
      address.revertChanges();
      expect(address.get('lastName')).toBe('foo');
    });
  });

});
