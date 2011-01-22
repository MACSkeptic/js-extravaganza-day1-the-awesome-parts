"use strict";

var presentation = presentation || {};
var myJQuery = myJQuery || jQuery;

presentation.helpers = (function ($) {
  return {
    getParameterByName: function (name) {
      name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
      var regexS = "[\\?&]"+name+"=([^&#]*)";
      var regex = new RegExp( regexS );
      var results = regex.exec( window.location.href );
      return results ? results[1] : "";
    }
  };
}(myJQuery));

