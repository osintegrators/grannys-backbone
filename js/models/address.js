define(['underscore', 'backbone'], function(_, Backbone) {

  var AddressModel = Backbone.Model.extend({
    defaults: {
      firstName: 'Jane',
      lastName: 'Doe'
    },
    initialize: function(){
      this._oldCopy = _.clone(this.attributes);
    },
    validate: function(attrs) {
      if(!attrs.firstName){
        return "First Name Required";
      }
      if(!attrs.lastName){
        return "Last Name Required";
      }
    },
    setOldCopy: function(){
      this._oldCopy = _.clone(this.attributes);
    },
    revertChanges: function(){
      this.set(this._oldCopy, {silent: true});
      debugger;
    }
  });

  return AddressModel;

});
