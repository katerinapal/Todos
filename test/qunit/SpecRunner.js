import QUnit from ".\\spec\\models\\TodoSpec.js";
import Backbone from "..\\..\\js\\lib\\backbone.localStorage.js";
import $ from "..\\..\\js\\lib\\jquery-1.8.0.js";
import _ from "..\\..\\js\\lib\\underscore-1.4.2.js";
require.config({
  baseUrl: "/js/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'lib/jquery-1.8.0',
    underscore: 'lib/underscore-1.3.3',
    backbone: 'lib/backbone-0.9.2',
    'backbone.localStorage': 'lib/backbone.localStorage',
    sinon: '../test/lib/sinon-1.4.2',
    qunit: '../test/lib/qunit',
    spec: '../test/qunit/spec/'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'backbone.localStorage': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    qunit: {
      exports: 'QUnit'
    },
    sinon: {
      exports: "sinon"
    }
  }
});


window.store = "TestStore"; // override local storage store name - for testing

var specs = [];

specs.push('spec/models/TodoSpec');
specs.push('spec/views/ClearCompletedSpec');
specs.push('spec/views/CountViewSpec');
specs.push('spec/views/FooterViewSpec');
specs.push('spec/views/MarkAllSpec');
specs.push('spec/views/NewTaskSpec');
specs.push('spec/views/TaskListSpec');
specs.push('spec/views/TaskViewSpec');

$(function(){
  ;
});
