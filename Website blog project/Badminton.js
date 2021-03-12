var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let shuttlecock = new Image();
shuttlecock.src = "Shuttlecock_bottomleft.jpg";

function start_badminton() {
  player1();
  player2();
  shuttlecock_animation();
}

function player1() {
  //Idk why block so blur
  ctx.fillStyle = "black";
  ctx.fillRect(50, 80, 10, 60);
}

function player2() {
  //Idk why block so blur
  ctx.fillStyle = "black";
  ctx.fillRect(220, 80, 10, 60);
  window.addEventListener("click", function () {
    ctx.fillRect(240, 80, 10, 60);
  });
}

function shuttlecock_animation() {
  //Don't name same as shuttlecock var or else will conflict
  ctx.drawImage(
    shuttlecock,
    0,
    0,
    shuttlecock.width,
    shuttlecock.height,
    0,
    0,
    40,
    40
  );
}
