import Backbone from "..\\..\\lib\\backbone-0.9.2.js";
import _ from "..\\..\\lib\\underscore-1.4.2.js";
import $ from "..\\..\\lib\\jquery-1.8.0.js";
import ViewHelper from "..\\..\\helpers\\ViewHelper.js";
;

var KEYCODE_ESC = 27;

var template = _.template('<input type="text" value="<%= title %>">');

var View = Backbone.View.extend({
  tagName: 'form',
  className: 'editTaskView',
  render: function(){
    this.$el.html( template( this.model.toJSON() ) );
    this.$input = this.$('input');
    return this;
  },
  events: {
    'blur input': 'reset',
    'submit': 'update',
    'keyup input': function(e){
      if ( e.keyCode === KEYCODE_ESC ){
        this.reset();
      }
    }
  },
  reset: function(){
    this.trigger('done');
  },
  update: function(e){
    e.preventDefault();
    this.model.save({title: this.$input.val().trim()});
    this.reset();
  },
  focus: function(){
    this.$input.focus().select();
  }
});
var bindingVariable = View;
export default bindingVariable;