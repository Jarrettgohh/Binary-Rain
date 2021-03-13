function textEffect() {
  var message = prompt("Type in display message");

  var canvas = document.getElementById("canvas_text");
  var ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth / 2;

  var x_array = [];
  var y_array = [];

  var x_coordinate = 0; //x coordinate of first letter
  var y_coordinate = 200; //y coordinate of first letter
  var x_shift = 0; //To allow space between words in sentence
  var font_size_text = 30;

  for (
    i = 0;
    i < message.length;
    i++ //To set and align the value of x and y coordinates of string
  ) {
    y_array[i] = y_coordinate;

    x_shift += font_size_text;
    x_array[i] = x_coordinate + x_shift;
  }

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
