function sticky_header() {
  window.onscroll = function () {
    fixed_Header();
  };

  var stick = document.getElementById("stick");
  var stick_stick = stick.offsetTop; //Put the offset Y value of header (How much pixels of space above header) into the var stick_stick

  function fixed_Header() {
    if (window.pageYOffset > stick_stick) {
      //Checks if the scroll is more than the space above header ( pageYOffset returns the pixel the document have been scrolled)

      stick.classList.add("sticky"); //Adds the 'sticky' class defined
    } else {
      stick.classList.remove("sticky"); // Removes the 'sticky' class
    }
  }
}
