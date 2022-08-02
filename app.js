let subtract = document.getElementById("subtract");
let radius = document.getElementById("radius");
let addition = document.getElementById("addition");
let color = document.getElementById("color");
let clearCanvas = document.getElementById("clearCanvas");

subtract.addEventListener("click", subtractOnce);
addition.addEventListener("click", additionOnce);
color.addEventListener("change", colorFunction);
clearCanvas.addEventListener("click", clearCanvasFunction);

function colorFunction(e) {
  let colorValue = String(color.value);
  let rect = canvas.getBoundingClientRect();
  drawCircle(e.clientX - rect.x, e.clientY - rect.y, colorValue);
}

function clearCanvasFunction() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let subtractionCounter = parseFloat(radius.innerHTML);

function subtractOnce() {
  if (subtractionCounter > 5) {
    subtractionCounter -= 5;

    radius.innerHTML = subtractionCounter;
    counter = parseFloat(radius.innerHTML);
  }
}

let counter = 10;
function additionOnce() {
  //parseFloat(radius.innerHTML)
  if (counter <= 45) {
    counter += 5;
    radius.innerHTML = counter;
  }

  subtractionCounter = parseFloat(radius.innerHTML);
}

let canvas = document.getElementById("sketchpad");

canvas.addEventListener("mousedown", mouseDown);
canvas.addEventListener("mouseup", mouseUp);

function mouseDown(e) {
  canvas.addEventListener("mousemove", mouseMove);

  let rect = canvas.getBoundingClientRect();
  drawCircle(e.clientX - rect.x, e.clientY - rect.y);
}

function mouseMove(e) {
  //console.log("This is working");
  let x = 0;
  let y = 0;
  if (e !== undefined) {
    let rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.x;
    y = e.clientY - rect.y;
  }

  drawCircle(x, y);
}

function mouseUp(e) {
  canvas.removeEventListener("mousemove", mouseMove);
  ctx.beginPath();
}

canvas.width = 700;
canvas.height = 600;
let ctx = canvas.getContext("2d");

/*ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;

ctx.moveTo(5, 5);
ctx.lineTo(100, 100);

ctx.stroke();*/

function drawCircle(x, y, color) {
  console.log(color);

  if (x != 0 && y != 0) {
    /*ctx.arc(x, y, parseFloat(radius.innerHTML), 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();*/

    ctx.strokeStyle = color;
    ctx.lineWidth = parseFloat(radius.innerHTML);
    //ctx.moveTo(x, y);
    ctx.lineCap = "round";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  }
}

function update() {
  drawCircle();
  mouseMove();

  //requestAnimationFrame(update);
}

update();
