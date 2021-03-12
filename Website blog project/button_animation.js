function menu_animation(X) {
  X.classList.toggle("change");
  menu_dropdown(X);
}

function menu_dropdown(X) {
  window.onclick = function (event) {
    if (document.getElementsByClassName("dropbtn")[0].contains(event.target)) {
      document.getElementById("myDropdown").classList.toggle("show");
    } else {
      document.getElementById("myDropdown").classList.remove("show");
      X.classList.remove("change");
    }
  };
}
