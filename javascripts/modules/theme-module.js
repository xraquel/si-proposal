$(function() {
  $("#hello").trigger("click");

  $(".navbar-toggler").click(function() {
    $('.sidebar').toggleClass('open');
  });

  $(".btn-close").click(function() {
    $('.sidebar').removeClass('open');
  });

  $('.works-dropdown a').click(function() {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.dropdown-btn').each(function() {
    $(this).click(function() {
      $(this).siblings('.dropdown-btn').removeClass('active');
      $(this).toggleClass('active');

      var dropdownContent = $(this).next();

      $(dropdownContent).siblings('.dropdown-container').addClass('d-none');

      if($(dropdownContent).hasClass("d-none")) { 
        $(dropdownContent).removeClass("d-none");
      } else {
        $(dropdownContent).addClass("d-none");
      }
    });
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