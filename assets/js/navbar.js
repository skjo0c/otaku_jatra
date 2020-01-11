// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 280 ||
    document.documentElement.scrollTop > 280
  ) {
    document.getElementById("mu-main-navbar").style.padding = "0";
  } else {
    document.getElementById("mu-main-navbar").style.padding = "20px 0";
  }
}
