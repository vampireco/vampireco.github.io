/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  // when scrolling up, show navbar
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  }
  // when scrolling down, hide navbar
  else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
