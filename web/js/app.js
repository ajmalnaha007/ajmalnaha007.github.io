(function($) {
  "use_strict";

  /*========================preloader=====================*/

    $(window).on('load', function() {
    $('#page-loader').fadeOut('fast', function() {
        $(this).remove();
    });
  });

  /*========================pbanner animation=====================*/

  $('i.circle-aj.circle-a').delay(300).animate({'right':'-350px','top':'-357px','opacity':'1'},600);
  $('i.circle-aj.circle-b').delay(800).animate({'right':'-320px','top':'-347px','opacity':'.7'},600);
  $('i.circle-aj.circle-c').delay(1500).animate({'right':'-290px','top':'-337px','opacity':'.5'},600);

        /**********************\
      //typist init
      /************************/

      if (typeof Typist === "function") {
        new Typist(document.querySelector(".typelist-skill"), {
            letterInterval: 60,
            textInterval: 1000
        });
      }


  }(jQuery));

  