define([
    'js/views/address-view',
    'js/models/address',
    'test/fixtures/address'
],function(AddressView, AddressModel, ModelFixtures){
  describe('An address view', function(){

    xit('should render first name, last name, and twitter handle', function(){
      var address = new AddressModel(ModelFixtures);
      var addressView = new AddressView({ model: address});
      addressView.render();

      expect(addressView.$('.first-name').text()).toBe(ModelFixtures.firstName);
      expect(addressView.$('.last-name').text()).toBe(ModelFixtures.lastName);
      expect(addressView.$('.twitter').text()).toBe(ModelFixtures.twitter);
    });

    it('should render when the model changes', function(){
      var address = new AddressModel(ModelFixtures);
      var addressView = new AddressView({ model: address});

      address.set('firstName', 'foo');

      expect(addressView.$('.first-name').text()).toBe('foo');
      expect(addressView.$('.last-name').text()).toBe(ModelFixtures.lastName);
      expect(addressView.$('.twitter').text()).toBe(ModelFixtures.twitter);
    });

  });
});
