define([
    'js/views/address-view',
    'js/models/address',
    'test/fixtures/address',
    'jquery',
    'jasmine-jquery'
],function(AddressView, AddressModel, ModelFixtures, $){
  describe('An address view', function(){
    var address, addressView;

    beforeEach(function(){
      address = new AddressModel(ModelFixtures);
      addressView = new AddressView({ model: address});
    });

    afterEach(function(){
      address = null;
      addressView.remove();
      addressView = null;
    });

    it('should render first name, last name, and twitter handle', function(){
      addressView.render();

      expect(addressView.$('.first-name').text()).toBe(ModelFixtures.firstName);
      expect(addressView.$('.last-name').text()).toBe(ModelFixtures.lastName);
      expect(addressView.$('.twitter').text()).toBe(ModelFixtures.twitter);
    });

    it('should re-render when the model changes', function(){
      address.set('firstName', 'foo');

      expect(addressView.$('.first-name').text()).toBe('foo');
      expect(addressView.$('.last-name').text()).toBe(ModelFixtures.lastName);
      expect(addressView.$('.twitter').text()).toBe(ModelFixtures.twitter);
    });

    it('should have an edit button that adds the edit class to it', function(){
      addressView.render();
      var editButton = addressView.$('.js-edit-button');
      expect(editButton).toExist();
      editButton.click();
      expect(addressView.$el).toHaveClass('editing');
    });
  });
});
