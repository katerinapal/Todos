import _ from "..\\lib\\underscore-1.4.2.js";
import Backbone from "..\\lib\\backbone-0.9.2.js";
import ViewHelper from "..\\helpers\\ViewHelper.js";
;

var template = _.template('<%= count + " " + items %> left');

var View = Backbone.View.extend({
  className: 'count',
  initialize: function(){
    var events = 'add reset remove change:completed';
    this.collection.on(events, this.render, this);
  },
  render: function() {
    if( this.collection.size() ) {
      var count = this.collection.remaining().length,
          items = ViewHelper.formatItem(count);
      this.$el.show().html( template({count: count, items: items}) );
    } else {
      this.$el.hide().empty();
    }
    return this;
  }
});

var bindingVariable = View;
export default bindingVariable;