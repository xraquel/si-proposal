$(function() {
  $(window).on("load", function() {
    $("#intro").trigger("click").addClass("active");
    worksSlider();
    servicesSlider();
  });

  sidebar();
  
  $(".js-child-page").click(function() {
    var tab = $(this).attr("data-id");

    $(tab).trigger("click");

    setTimeout(function() {
      $(tab).trigger("click");
    }, 50);
  });

  $(".btn-float").click(function() {
    var next = $(this).attr('data-id');
    $('#'+next).trigger('click').addClass('active');

    var val = $('#'+next).next();

    var x = val.hasClass("sidebar-dropdown") ? $('#'+next).next().next().attr('id') : $('#'+next).next().attr('id');

    if(next === 'tab-contact') {
      $(this).toggleClass('d-none');
    }
    
    $(this).attr('data-id', x);

    if($(window).width() <= 768) {
      window.scrollTo(0, 0);
    }
  });
});

function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add("d-none");
  }
  tablinks = document.getElementsByClassName("sidebar-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tab).classList.remove("d-none");
}

function sidebar() {
  $(".navbar-toggler").click(function() {
    $(".sidebar").toggleClass("open");
  });

  $(".btn-close").click(function() {
    $(".sidebar").removeClass("open");
  });

  $(".works-dropdown a").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $("#works-wrapper").removeClass("d-none");
    
    if($(window).width() <= 768) {
      $(".sidebar").removeClass("open");
    }
  });

  $(".services-dropdown a").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    $("#services-wrapper").removeClass("d-none");
    
    if($(window).width() <= 768) {
      $(".sidebar").removeClass("open");
    }
  });

  $(".sidebar-link").click(function() {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    var x = $(this).next();
    var y = x.hasClass("sidebar-dropdown") ? $(this).next().next().attr('id') : $(this).next().attr('id');
    
    $('.btn-float').attr('data-id', y).removeClass('d-none');
      
    if(!$("#works-wrapper").hasClass("d-none")){
      $("#works-wrapper").addClass("d-none");
    }

    if(!$("#services-wrapper").hasClass("d-none")){
      $("#services-wrapper").addClass("d-none");
    }    

    if($(window).width() <= 768) {
      $(".sidebar").removeClass("open");
    }
  });

  $(".dropdown-btn").each(function() {
    $(this).click(function() {
      $(this).siblings(".dropdown-btn").removeClass("active");
      $(this).toggleClass("active");

      var dropdownContent = $(this).next();

      $(dropdownContent).siblings(".dropdown-container").addClass("d-none");

      if($(dropdownContent).hasClass("d-none")) { 
        $(dropdownContent).removeClass("d-none");
      } else {
        $(dropdownContent).addClass("d-none");
      }
    });
  });
}

function worksSlider() {
  $("#tab-web").click(function() {
    var webDesign = new Swiper(".web-design-slider", {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
          nextEl: ".web-design-slider .swiper-button-next",
          prevEl: ".web-design-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-social").click(function() {
    var socialMedia = new Swiper(".social-media-slider", {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
          nextEl: ".social-media-slider .swiper-button-next",
          prevEl: ".social-media-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-ad").click(function() {
    var adCampaign = new Swiper(".ad-campaign-slider", {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
          nextEl: ".ad-campaign-slider .swiper-button-next",
          prevEl: ".ad-campaign-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-amazon-listing").click(function() {
    var amazon = new Swiper(".amazon-listing-slider", {
        speed: 400,
        slidesPerView: 1,
        autoHeight: true,
        navigation: {
          nextEl: ".amazon-listing-slider .swiper-button-next",
          prevEl: ".amazon-listing-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-product").click(function() {
    var product = new Swiper(".product-development-slider", {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
          nextEl: ".product-development-slider .swiper-button-next",
          prevEl: ".product-development-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-branding").click(function() {
    var branding = new Swiper(".branding-slider", {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1,
        navigation: {
          nextEl: ".branding-slider .swiper-button-next",
          prevEl: ".branding-slider .swiper-button-prev",
        },
    });
  });
}

function servicesSlider() {
  $("#tab-amazon").click(function() {
    var amazon = new Swiper(".amazon-slider", {
        speed: 400,
        slidesPerView: "auto",
        spaceBetween: 25,
        navigation: {
          nextEl: ".amazon-slider .swiper-button-next",
          prevEl: ".amazon-slider .swiper-button-prev",
        },
    });
  });

  $("#tab-marketing").click(function() {
    var growthMarketing = new Swiper(".growth-slider", {
        speed: 400,
        slidesPerView: 1,
        autoHeight: true,
        navigation: {
          nextEl: ".growth-slider .swiper-button-next",
          prevEl: ".growth-slider .swiper-button-prev",
        },
    });
  });
}