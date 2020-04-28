// $(function() {

// });



var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("dropdown-btn active");

    for (i = 0; i < current.length; i++) {
      var content = current[i].nextElementSibling;
    
      if (content.style.display === "block") {
        content.style.display = "none";
      }

      current[i].removeAttribute("active");
      current[i].classList.remove("active")
    }

    this.classList.toggle("active");
    this.toggleAttribute("active");
    var dropdownContent = this.nextElementSibling;
    
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

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
  evt.currentTarget.className += " active";
}

document.getElementById("hello").click();