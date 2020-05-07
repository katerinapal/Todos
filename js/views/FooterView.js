import Backbone from "..\\lib\\backbone-0.9.2.js";
import { View as CountView } from ".\\CountView.js";

var View = Backbone.View.extend({
  tagName: 'footer',
  initialize: function(){
    this.children = {
      countView: new CountView({collection: this.collection}),
      clearCompleted: new ClearCompleted({collection: this.collection})
    };

    this.$el.append(this.children.countView.render().el);
    this.$el.append(this.children.clearCompleted.render().el);

    this.collection.on('add remove reset', this.render, this);
  },
  render: function(){
    this.$el.toggle( this.collection.size() > 0 );
    return this;
  }
});

var exported_View = View;
export { exported_View as View };