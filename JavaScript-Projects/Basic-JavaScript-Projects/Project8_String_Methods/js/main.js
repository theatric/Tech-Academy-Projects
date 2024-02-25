// Global Variables 
var sentence = "The rain in Spain falls mainly in the plain.";
var X = 935;
var Y = 34783.3807024794798397

// concat() Method Assignment
function full_Sentence() {
    var part_1 = "The rain ";
    var part_2 = "in Spain ";
    var part_3 = "falls mainly ";
    var part_4 = "in the plain.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

// slice() Method Assignment
function slice_Method() {
    var section = sentence.slice(12, 17);
    document.getElementById("slice").innerHTML = section;
}

// More Methods Challenge
function toUpperCase_Method() {
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function search_Method() {
    var search = sentence.search("Spain");
    document.getElementById("search").innerHTML = search;
}

// Number Methods Assignment
function toString_Method () {
    document.getElementById("string").innerHTML = X.toString();
}

// toPrecision() Method Assignment
function toPrecision_Method() {
    document.getElementById("precision").innerHTML = Y.toPrecision(12);
}

// New Methods Challenge
function toFixed_Method() {
    document.getElementById("fixed").innerHTML = Y.toFixed(2);
}

function valueOf_Method() {
    document.getElementById("value").innerHTML = sentence.valueOf();
}