define(['backbone', 'js/models/address'], function(Backbone, AddressModel){
  var AddressCollection = Backbone.Collection.extend({
    url: '/addresses',
    model: AddressModel
  });

  return AddressCollection;
});
