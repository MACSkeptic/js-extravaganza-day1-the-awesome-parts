"use strict";

var presentation = presentation || {};

presentation.slides = (function ($) {
  var index = -1,
      list = [],
      hideEffects = ["hide", "fadeOut", "slideUp"],
      showEffects = ["show", "fadeIn", "slideDown"],
      cachedContainer = null;

  function random() {
    return Math.floor(Math.random() * hideEffects.length);
  }

  function findContainer() {
    cachedContainer = cachedContainer || $('#slide_container');
    return cachedContainer;
  }

  function show() {
    var elem = findContainer();
    elem[showEffects[random()]]('fast', function () {
      function makeItPretty() {
        prettyPrint();
        if(elem.has('div.nooo').length > 0) {
          elem.addClass('nooo');
        }
        if(elem.has('pre.prettyprint').length > 0) {
          elem.addClass('code');
        }
        $('#slides').val(index + '');
        window.location.hash = index+"";
      }

      var code = $('pre.prettyprint[source]');
      if(code.length > 0) {
        code.load('src/' + code.attr('source'), null, makeItPretty);
      } else {
        makeItPretty();
      }
    });
  }

  function current() {
    return 'slides/' + list[index];
  }

  function loadThen(callback) {
    return function () { 
      findContainer().load(current(), null, callback);  
    };
  }

  function hideThen(callback) {
    var elem = findContainer();
    elem.removeClass('nooo').removeClass('code');
    elem[hideEffects[random()]]('fast', callback);
  }

  function render() {
    hideThen(loadThen(show));
  }

  function findFirstSlide() {
    return 0;
  }
  
  function findLastSlide() {
    return (list.length - 1);
  }
  
  function isFewerThanFirstSlide(i) {
    return (i <= findFirstSlide());
  }
  
  function isHigherThanLastSlide(i) {
    return (i > findLastSlide());
  }

  function goToIndex (i) {
    var currentSlide = index;
    index = (isFewerThanFirstSlide(i) ? 
      findFirstSlide() : 
      (isHigherThanLastSlide(i) ? 
        findLastSlide() : 
        i) 
    );
    
    if (currentSlide !== index) {
      render();
    }
  }

  function goToNextSlide() {
    goToIndex(index + 1);
  }
  
  function goToPreviousSlide() {
    goToIndex(index - 1);
  }
  
  function goToFirstSlide() {
    goToIndex(findFirstSlide());
  }
  
  function goToLastSlide() {
    goToIndex(findLastSlide());
  }
  
  function bindKeyDownEvents () {
    $('body').bind('keydown', function (e) {
      if(e.keyCode === 37) {
        goToPreviousSlide();
      }
      if(e.keyCode === 39) {
        goToNextSlide();
      }
    });
  }

  return { 
    initialize: function () {
      //awesomeness//
list.push('0000_first_page.html');
list.push('0001_first_page.html');
list.push('0010_doug_crockford_quote_1.html');
list.push('0030_bad_ruby_code.html');
list.push('0040_bad_js_code.html');
list.push('0050_why.html');
list.push('0060_bad_code.html');
list.push('0070_crash_course.html');
list.push('0080_values.html');
list.push('0090_null.html');
list.push('0100_null_typeof.html');
list.push('0110_undefined.html');
list.push('0120_undefined_typeof.html');
list.push('0130_nan.html');
list.push('0140_nan_typeof.html');
list.push('0150_equality_versus.html');
list.push('0160_equality_question.html');
list.push('0170_equality_answer.html');
list.push('0180_equality_conclusion.html');
list.push('0190_operators_1.html');
list.push('0200_operators_2.html');
list.push('0210_operators_3.html');
list.push('0220_this.html');
list.push('0230_loose.html');
list.push('0240_method.html');
list.push('0250_apply.html');
list.push('0260_constructor.html');
list.push('0270_oops_question.html');
list.push('0275_oops_answer.html');
list.push('0280_just_dont.html');
list.push('0290_brackets_question.html');
list.push('0300_brackets_answer.html');
list.push('0305_semicolon.html');
list.push('0310_brackets_explanation.html');
list.push('0320_brackets_explanation_2.html');
list.push('0330_brackets_explanation_3.html');
list.push('0340_brackets_explanation_4.html');
list.push('0350_brackets_explanation_5.html');
list.push('0360_brackets_explanation_6.html');
list.push('0370_scope.html');
list.push('0380_block_question.html');
list.push('0390_block_answer.html');
list.push('0400_function_scope.html');
list.push('0410_infered_globals.html');
list.push('0420_jslint_can.html');
list.push('0430_ample.html');
list.push('0440_pain.html');
list.push('0450_jslint_will.html');
list.push('0460_jslint_jresig.html');
list.push('0470_style_0.html');
list.push('0480_style_1.html');
list.push('0490_style_2.html');
list.push('0500_style_3.html');
list.push('0510_immediate_function.html');
list.push('0512_rename_jquery.html');
list.push('0514_rename_jquery_2.html');
list.push('0516_from_scratch.html');
list.push('0518_augmentation.html');
list.push('0520_factory.html');
list.push('0530_inheritance_bad.html');
list.push('0530_inheritance_good.html');
list.push('0540_inheritance_sample.html');
list.push('0550_code_0.html');
list.push('0560_code_1.html');
list.push('0570_code_2.html');
list.push('0580_bad_ruby_code.html');
list.push('0590_better_ruby_code.html');
list.push('0600_bad_js_code.html');
list.push('0610_better_js_code.html');
list.push('0620_must_read.html');
list.push('0900_questions.html');
list.push('0990_kthxbai.html');
//awesomeness//
    },
    first: function () {
      goToFirstSlide();
    },
    next: function () {
      goToNextSlide();
    },
    previous: function () {
      goToPreviousSlide();
    },
    last: function() {
      goToLastSlide();
    },
    goTo: function(i) {
      goToIndex(parseInt(parseInt(i)));
    },
    present: function () {
      $.each(list, function(i, value) {   
        $('#slides').
          append($("<option></option>").
          attr("value", i).
          text('[' + i + '] ' + value)); 
      });
      $('#slides').bind('change', function () {
        goToIndex(parseInt($(this).val(), 10));
        return false;
      });
      bindKeyDownEvents();
    }
  };
}(jQuery));
