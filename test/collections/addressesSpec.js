define([
    'js/collections/addresses',
    'js/models/address',
    'test/fixtures/addresses'
    ], function(AddressCollection, AddressModel, AddressesFixtures){
  
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
      // set up the fake server
      var fakeServer = sinon.fakeServer.create();
      fakeServer.respondWith('GET',
        '/addresses',
        [ 200,
        { 'Content-type': 'application/json' },
        JSON.stringify(AddressesFixtures.GET.addresses)
        ]);

      var addresses = new AddressCollection();
      addresses.fetch();
      fakeServer.respond();
      expect(addresses.length).toBe(3);

      // tear down the fake server
      fakeServer.restore();
    });

  });
});
