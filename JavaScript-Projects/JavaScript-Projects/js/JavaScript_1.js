// Switch Statement Assignment
function color_Function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color!";
    switch(colors) {
        case "red":
            color_output = "Red " + color_string;
        break;
        case "yellow":
            color_output = "Yellow " + color_string;
        break;
        case "green":
            color_output = "Green " + color_string;
        break;
        case "blue":
            color_output = "Blue " + color_string;
        break;
        case "pink":
            color_output = "Pink " + color_string;
        break;
        case "purple":
            color_output = "Purple " + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = color_output;
}

// getElementsByClassName() Method
function className_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

// Canvas Challenge
const canvas = document.getElementById("clock");
const ctx = canvas.getContext("2d");
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * .9;
//drawClock();
setInterval(drawClock, 1000);

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}
 
function drawFace(ctx, radius) {
    const grad = ctx.createRadialGradient(0, 0, radius * .95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(.5, "#fff");
    grad.addColorStop(1, "#333");

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "#fff";
    ctx.fill();

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * .1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333";
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    ctx.font = radius * .15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let num = 1; num < 13; num++) {
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * .85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * .85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    const now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // hour
    hour = hour % 12;
    hour = (hour * Math.PI/6) + (minute * Math.PI/(6*60)) + (second * Math.PI/(360*60));
    drawHand(ctx, hour, radius * 0.5, radius * .07);

    // minute
    minute = (minute * Math.PI/30) + (second * Math.PI/(30*60));
    drawHand(ctx, minute, radius * .8, radius * .07);

    // second
    second = (second * Math.PI/30);
    drawHand(ctx, second, radius * .9, radius * .02);
}

function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}

// Canvas Gradient Challenge
const gradient= document.getElementById("gradient");
const ctxgrad = gradient.getContext("2d");

// create a gradient
const grd = ctxgrad.createLinearGradient(0, 0, 250, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// draw a filled rectangle
ctxgrad.fillStyle = grd;
ctxgrad.fillRect(0, 0, 500, 250);