define(['js/collections/addresses'], function(AddressCollection){
  
  describe('The address collection', function(){
  
    it('should exist', function(){
      expect(AddressCollection).toBeDefined();
    });

    it('should have a url mapped to it', function(){
      var addresses = new AddressCollection();
      expect(addresses.url).toBeDefined();
    });

  });
});
