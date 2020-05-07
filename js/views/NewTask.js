import Backbone from "..\\lib\\backbone-0.9.2.js";

var template = '<input type="text" placeholder="What needs to be done?">';

var View = Backbone.View.extend({
  tagName: 'form',
  className: 'newTask',
  render: function(){
    this.$el.html(template);
    this.$input = this.$("input");
    return this;
  },
  events: {
    'submit': function(e) {
      e.preventDefault();
      this.collection.create({ title: this.$input.val().trim(), timestamp: new Date().getTime() });
      this.$input.val("");
    }
  }
});
var exported_View = View;
export { exported_View as View };