"use strict";

var presentation = presentation || {};
var myJQuery = myJQuery || jQuery;

presentation.buttons = (function ($) {
  function buttons() { return $('.jquery_button');  }
  
  var that = {};
  
  that.all = function () { return buttons(); };
  
  that.initialize = function () {
    that.all().each(function (i, domButton) {
      var button = $(domButton);
      button.button( {
        text: false,
        icons: { primary: 'ui-icon-seek-' + button.attr('icon') }
      });
    });
  };

  return that;
}(myJQuery));
