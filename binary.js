canvas.addEventListener("click", function () {
  random_index = Math.floor(Math.random() * colors.length); //Generate random integer
  fillStyle = colors[random_index]; //Gets a random color from the 'colors' array
});

var colors = [
  "red",
  "green",
  "blue",
  "purple",
  "orange",
  "pink",
  "darksalmon",
  "salmon",
  "coral",
  "lightcoral",
  "indianred",
  "crimson",
  "firebrick",
  "darkred",
];
var fillStyle = "#FF5733";
//Outside of function so accessible to change by event listener
//Initial color

function binary() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 4;

  var binary = "01";
  binary = binary.split(""); //To make the binary variable into a list? And splits the string by every character (To form '1' and '0')

  var font_size = 30;
  var columns = canvas.width / font_size;
  var drops = [];
  var count = 0;

  for (var x = 0; x < columns; x++) {
    //To establish the drops.length?
    //Which refers to the vertical length

    drops[x] = 1;
  }

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.1)"; //To allow the cool effect? //Controls transparency
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = fillStyle;
    ctx.font = font_size + "px Arial"; // Sets the font option

    // if (count < user_greetings_time) {
    for (var i = 0; i < drops.length; i++) {
      var text = binary[Math.floor(Math.random() * binary.length)];

      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canvas.height && Math.random() > 0.9) {
        drops[i] = 0;
      }

      drops[i]++;
      count++;
    }
  }
  setInterval(draw, 120);
}
