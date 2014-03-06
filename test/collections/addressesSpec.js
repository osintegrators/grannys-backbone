define([
    'js/collections/addresses',
    'js/models/address'
    ], function(AddressCollection, AddressModel){
  
  describe('The address collection', function(){
  
    it('should exist', function(){
      expect(AddressCollection).toBeDefined();
    });

    it('should have a url mapped to it', function(){
      var addresses = new AddressCollection();
      expect(addresses.url).toBeDefined();
    });

    it('should have a model', function(){
      var addresses = new AddressCollection();
      expect(addresses.model).toBe(AddressModel);
    });

    it('should be able to process a successful response from the server', function(){
      var addresses = new AddressCollection();
      addresses.fetch();
      expect(addresses.length).toBe(3);
    });

  });
});
