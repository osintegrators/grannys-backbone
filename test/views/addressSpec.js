define([
    'js/views/address-view',
    'js/models/address',
    'test/fixtures/address'
],function(AddressView, AddressModel, ModelFixtures){
  describe('An address view', function(){

    it('should render first name, last name, and twitter handle', function(){
      var address = new AddressModel(ModelFixtures);
      var addressView = new AddressView({ model: address});
      addressView.render();

      expect(addressView.$('.first-name').text()).toBe(ModelFixtures.firstName);
      expect(addressView.$('.last-name').text()).toBe(ModelFixtures.lastName);
      expect(addressView.$('.twitter').text()).toBe(ModelFixtures.twitter);
    });
  });
});
