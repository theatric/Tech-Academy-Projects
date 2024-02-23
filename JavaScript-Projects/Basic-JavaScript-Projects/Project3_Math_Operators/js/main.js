// Math Operators Assignment
function addition_Function() {
    var addition = 3 + 6;
    document.getElementById("Math1").innerHTML = "3 plus 6 equals " + addition + ".";
}

// Subtraction Assignment
function subtraction_Function() {
    var subtraction = 3 - 6;
    document.getElementById("Math2").innerHTML = "3 minus 6 equals " + subtraction + ".";
}

// Multiplication and Division Assignment
function multiplication_Function() {
    var multiplication = 3 * 6;
    document.getElementById("Math3").innerHTML = "3 times 6 equals " + multiplication + ".";
}

function division_Function() {
    var division = 3 / 6;
    document.getElementById("Math4").innerHTML = "3 divided by 6 equals " + division + ".";
}

// Multiple Operators Assignment
function multi_Math() {
    var multi_Math = (3 + 6) * 3 / 6 - 3;
    document.getElementById("Math5").innerHTML = "3 plus 6, multiplied by 3, divided by 6 and then subtracted by 3 equals " + multi_Math + ".";
}

// Modulus Operator Assignment
function modulus_Function() {
    var modulus = 3 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 3 by 6 you get a remainder of " + modulus + ".";
}

// Negation Operation Assignment 
function negation_Function() {
    var negation = -3;
    document.getElementById("Math7").innerHTML = "This is the product of a negation operator: " + negation + ".";
}

// Increment and Decrement Assignment
function increment_Function() {
    var X = 3;
    X++;
    document.getElementById("Math8").innerHTML ="When 3 is incremented you get: " +  X + ".";
}

function decrement_Function() {
    var Y = 6;
    Y--;
    document.getElementById("Math9").innerHTML ="When 6 is decremented you get: " +  Y + ".";
}

// Math.Random Assignment
function random_Function() {
    document.getElementById("Math10").innerHTML = Math.ceil(Math.random() * 10) + ".";
}