var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var pattern;
var imageObj = new Image();
imageObj.onload = function() {
    var mainCanvas = document.getElementById("carte");
    var mainContext = mainCanvas.getContext('2d');
    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;
    pattern = mainContext.createPattern(imageObj, 'repeat');

    mainContext.rect(0, 0, canvasWidth, canvasHeight);
    mainContext.fillStyle = pattern;
    mainContext.fill();

    if(imageObj.height > canvasHeight) {
        imageObj.width *= canvasHeight / imageObj.height;
        imageObj.height = canvasHeight;
    }
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
    mainContext.drawImage(imageObj, 0, 0, canvasWidth, canvasHeight);
};
imageObj.src = 'img/ratp.png';

var posX = new Number();
var posY = new Number();
function drawCircle() {
    var mainCanvas = document.getElementById("carte");
    var mainContext = mainCanvas.getContext('2d');
    var canvasWidth = mainCanvas.width;
    var canvasHeight = mainCanvas.height;
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

    // color in the background
    mainContext.fillStyle = pattern;
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw the circle
    mainContext.beginPath();

    var radius = 1 + 10 * Math.abs(Math.cos(angle));
    mainContext.arc(posX, posY, radius, 0, Math.PI * 2, false);
    mainContext.closePath();

    // color in the circle
    mainContext.fillStyle = "#f00";
    mainContext.fill();

    angle += Math.PI / 64;

    requestAnimationFrame(drawCircle);
}

document.addEventListener("DOMContentLoaded", initialise, false);
function initialise()
{
    var canvas = document.getElementById("carte");
    posX = -20;
    posY = -20;
    loadCoordinate();
    drawCircle();
    //canvas.addEventListener("mousedown", getPosition, false);
}

function getPosition(event)
{
    var canvas = document.getElementById("carte");

    if (event.x != undefined && event.y != undefined)
    {
      posX = event.x;
      posY = event.y;
    }
    else // Firefox method to get the position
    {
      posX = event.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
      posY = event.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
    }
    posX -= canvas.offsetLeft;
    posY -= canvas.offsetTop;
    posX -= 240;
    posY -= 120;
    console.log(canvas.offsetLeft + ' ' + canvas.offsetTop);
}