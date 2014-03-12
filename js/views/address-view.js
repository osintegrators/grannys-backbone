define([
  'backbone',
  'jquery',
  'hbs!templates/address'
], function(Backbone, $, addressTmpl){
  var AddressView = Backbone.View.extend({
    template: addressTmpl,
    initialize: function(){
      this.listenTo(this.model, 'change', this.render);
    },
    render: function(){
      var modelJSON = this.model.toJSON();
      this.$el.html(this.template(modelJSON));
    
      return this;
    },
    events: {
      'click .js-edit-button': 'toEditMode',
      'click .js-cancel-button': 'cancelChanges'
    },
    toEditMode: function(){
      this.$el.addClass('editing');
    },
    cancelChanges: function(){
      this.toViewMode();
    },
    toViewMode: function(){
      this.$el.removeClass('editing');
    }
  });

  return AddressView;
});
