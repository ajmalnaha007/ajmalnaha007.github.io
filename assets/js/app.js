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

    
      /**********************\
      // skill Progrss-bar
      /************************/
    
    $(window).scroll(function() {
      
       if ($(this).scrollTop() > (($('#skills').offset().top - 300)+ ($('#skills').outerHeight()) - ($(window).height()))){
         
          $(".progress-bar").each(function(){
              each_bar_width = $(this).attr('aria-valuenow');
              $(this).css({
                width:each_bar_width + "%"
              });
              $(this).html('<span class="progress-tooltip" style="left:'+ each_bar_width +'%">' + each_bar_width + '%</span>');
          });
         
       }
      
    });

        // ========================================================================= //
    //  Porfolio isotope and filter
    // ========================================================================= // 
    
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-grid-item'
    });

    $('#portfolio-flters li').on('click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });

    
  }(jQuery));

  