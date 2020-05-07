import _ from "..\\lib\\underscore-1.4.2.js";
import Backbone from "..\\lib\\backbone-0.9.2.js";
import { ViewHelper_obj as ViewHelper } from "..\\helpers\\ViewHelper.js";

var template = _.template('Clear <%= count %> completed <%= items %>');

var View = Backbone.View.extend({
  tagName: 'button',
  initialize: function(){
    var events = 'add reset remove change:completed';
    this.collection.on(events, this.render, this);
  },
  render: function() {
    var count = this.collection.completed().length;
    if( count ) {
      var items = ViewHelper.formatItem(count);
      this.$el.show().html( template({count: count, items: items}) );
    } else {
      this.$el.hide().empty();
    }
    return this;
  },
  events: {
    click: function() {
      var completed = this.collection.completed();
      _(completed).each(function(model){
        model.destroy();
      });
    }
  }
});

var exported_View = View;
export { exported_View as View };