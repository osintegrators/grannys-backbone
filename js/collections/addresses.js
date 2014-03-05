define(['backbone'], function(Backbone){
  var AddressCollection = Backbone.Collection.extend({
    url: '/addresses' 
  });

  return AddressCollection;
});
