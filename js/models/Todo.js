import Backbone from "..\\lib\\backbone.localStorage.js";
import _ from "..\\lib\\underscore-1.4.2.js";
;

var store = new Backbone.LocalStorage(window.store || "Todos"); // for testing purposes

var Todo = Backbone.Model.extend({
  localStorage: store,
  defaults: {
    title: "",
    timestamp: 0,
    completed: false
  },
  validate: function(attrs) {
    if ( _.isEmpty(attrs.title) ) {
      return "Missing Title";
    }
  }
});

var Todos = Backbone.Collection.extend({
  localStorage: store,
  model: Todo,
  completed: function() {
    return this.where({completed: true});
  },
  remaining: function() {
    return this.where({completed: false});
  },
  comparator: function(model){
    return model.get('timestamp');
  }
});

var bindingVariable = {
  Model: Todo,
  Collection: Todos
};

export default bindingVariable;