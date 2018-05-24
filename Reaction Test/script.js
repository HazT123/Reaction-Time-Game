document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('square').style.display = "none";
    document.getElementById('circle').style.display = "none";
    document.getElementById('triangle').style.display = "none";
    document.getElementById('rectangle').style.display = "none";
    startGame();
});

var square;
var circle;
var triangle;
var rectangle;

chooseRandom = (number) => {
    number = Math.floor(Math.random() * 4) + 1;
    if (number === 1) {
        document.getElementById('square').style.display = "block";
        square = new Date().getTime();
        console.log(square);
    } else if (number === 2) {
        document.getElementById('circle').style.display = "block";
        circle = new Date().getTime();
        console.log(circle);
    } else if (number === 3) {
        document.getElementById('triangle').style.display = "block";
        triangle = new Date().getTime();
        console.log(triangle);
    } else if (number === 4) {
        document.getElementById('rectangle').style.display = "block";
        rectangle = new Date().getTime();
        console.log(rectangle);
    }
    setTimeout(function() {
        document.getElementById('square').style.display = "none";
        document.getElementById('circle').style.display = "none";
        document.getElementById('triangle').style.display = "none";
        document.getElementById('rectangle').style.display = "none";
    }, 500)
}

squareFunction = () => {
    var distance = new Date().getTime();
    let timeTaken = distance - square
    var milliseconds = Math.floor((timeTaken % (1000 * 60)) / 1);
    var seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
    document.getElementById('score').innerHTML = milliseconds + "ms " + seconds + "s";
}

circleFunction = () => {
    var distance = new Date().getTime();
    let timeTaken = distance - circle
    var milliseconds = Math.floor((timeTaken % (1000 * 60)) / 1);
    var seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
    document.getElementById('score').innerHTML = milliseconds + "ms " + seconds + "s";
}

triangleFunction = () => {
    var distance = new Date().getTime();
    let timeTaken = distance - triangle
    var milliseconds = Math.floor((timeTaken % (1000 * 60)) / 1);
    var seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
    document.getElementById('score').innerHTML = milliseconds + "ms " + seconds + "s";
}

rectangleFunction = () => {
    var distance = new Date().getTime();
    let timeTaken = distance - rectangle
    var milliseconds = Math.floor((timeTaken % (1000 * 60)) / 1);
    var seconds = Math.floor((timeTaken % (1000 * 60)) / 1000);
    document.getElementById('score').innerHTML = milliseconds + "ms " + seconds + "s";
}

startGame = () => {
    chooseRandom();
    document.getElementById('score').innerHTML = "";
}

setInterval(startGame, 5000);