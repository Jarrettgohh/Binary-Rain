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
// var fillStyle = "#FF5733";
//Outside of function so accessible to change by event listener
//Initial color

function binary() {
  var message = prompt("Type in display message");

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  // var binary = "01";
  // binary = binary.split(""); //To make the binary variable into a list? And splits the string by every character (To form '1' and '0')

  // var font_size = 30;
  // var columns = canvas.width / font_size;
  // var drops = [];
  // var count = 0;
  // var user_greetings_time = 1000;

  // for (var x = 0; x < columns; x++) {
  //   //To establish the drops.length?
  //   //Which refers to the vertical length

  //   drops[x] = 1;
  // }

  // function draw() {
  //   ctx.fillStyle = "rgba(0,0,0,0.1)"; //To allow the cool effect? //Controls transparency
  //   ctx.fillRect(0, 0, canvas.width, canvas.height);
  //   ctx.fillStyle = fillStyle;
  //   ctx.font = font_size + "px Arial"; // Sets the font option

  //   // if (count < user_greetings_time) {
  //   for (var i = 0; i < drops.length; i++) {
  //     var text = binary[Math.floor(Math.random() * binary.length)];

  //     ctx.fillText(text, i * font_size, drops[i] * font_size);

  //     if (drops[i] * font_size > canvas.height && Math.random() > 0.9) {
  //       drops[i] = 0;
  //     }

  //     drops[i]++;
  //     count++;
  //   }
  //  }
  // else if (message) {

  var x_array = [];
  var y_array = [];

  // var letters = message.split(" ");
  // letters = letters.join("");

  // var letters = ["H", "e", "l", "l", "o", "U", "s", "e", "r"];
  var x_coordinate = -60; //x coordinate of first letter
  var y_coordinate = 500; //y coordinate of first letter
  var x_shift = 0; //To allow space between words in sentence
  var font_size_text = 60;

  for (
    i = 0;
    i < message.length;
    i++ //To set and align the value of x and y coordinates of string
  ) {
    y_array[i] = y_coordinate;

    // if (message[i] == message[i].toUpperCase()) {
    //   //If letter is uppercase which means first letter of new word, then skip extra space

    //   x_shift += font_size_text * 2;
    //   x_array[i] = x_coordinate + x_shift;
    // } else {
    //Else skip only one font_size
    x_shift += font_size_text;
    x_array[i] = x_coordinate + x_shift;
    // }
  }

  console.log(x_array);

  var x = 0;

  user_greeting(); //Need to call the function

  function user_greeting() {
    var x_axis = x_array[x];
    var y_axis = y_array[x];

    ctx.font = font_size_text + "px Verdana";
    var fillStyle_text = "green";
    ctx.fillStyle = fillStyle_text;
    ctx.fillText(message[x], x_axis, y_axis);
    x++;

    if (x == message.length)
      //To prevent overcounting
      clearInterval(interval);
  }

  var interval = setInterval(user_greeting, 200);
}
// }
// setInterval(draw, 120);
// }
