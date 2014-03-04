define(['underscore', 'backbone'], function(_, Backbone){

  var AddressModel = Backbone.Model.extend({
    defaults: {
      firstName: 'Jane',
      lastName: 'Doe'
    }
  });

  return AddressModel;

});
