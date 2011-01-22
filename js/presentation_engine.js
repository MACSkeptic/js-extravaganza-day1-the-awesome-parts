"use strict";

var presentation = presentation || {};
var myJQuery = myJQuery || jQuery;

presentation.engine = (function ($, slides, buttons) {
  function onButtonClick () {
    slides[$(this).attr('action')]();
  }  

  $(function domDependentInitialization() {
    slides.initialize();
    buttons.initialize();

    slides.present();
    slides.first();

    buttons.all().bind('click', onButtonClick);
  });
}(myJQuery, presentation.slides, presentation.buttons));

