import Backbone from "..\\lib\\backbone-0.9.2.js";
import ViewHelper from "..\\helpers\\ViewHelper.js";
import TaskView from ".\\task\\TaskView.js";
;

var View = Backbone.View.extend({
  tagName: 'ul',
  className: 'taskList',
  initialize: function(){
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.add, this);
  },
  render: function(){
    this.$el.empty().hide();
    this.collection.each(this.add, this);
    return this;
  },
  add: function(model) {
    var child = new TaskView({model: model});
    this.$el.append(child.render().$el).show();
  }
});
var bindingVariable = View;
export default bindingVariable;