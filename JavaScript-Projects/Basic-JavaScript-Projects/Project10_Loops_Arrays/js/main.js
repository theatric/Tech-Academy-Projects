// Loops Assignment
function call_Loop() {
    var digit = "";
    var X = 1;
    while (X < 11) {
        digit += "<br>" + X;
        X++;
    }
    document.getElementById("count_to_ten").innerHTML = digit;
}

// Length Property Challenge
function string_Length() {
    var text = "Hello, World!";
    var length = text.length;
    document.getElementById("string").innerHTML = length + "."
}

// For Loop Assignment
function for_Loop() {
    var instruments = ["guitar", "piano", "drums", "tuba", "violin", "saxaphone", "harp"];
    var content = "";
    var Y;
    for (Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}

// document.getElementById().innerHTML Assignment
function get_Poses() {
    var poses = [];
    poses[1] = "standing";
    poses[2] = "sitting";
    poses[3] = "kneeling";
    poses[4] = "jumping";
    document.getElementById("model").innerHTML = "In this picture, the model is " + poses[3] + ".";
}

// Const Keyword Assignment
function constant_Function() {
    const smartphone = {operating_system: "Apple iOS", model: "iPhone 15 Pro Max", color: "black"};
    smartphone.color = "pink";
    smartphone.capacity = "128GB";
    document.getElementById("constant").innerHTML = "The capacity of the " + smartphone.color + " " + smartphone.model + " is " + smartphone.capacity + ".";

}

// Let Keyword Assignment
function let_Function() {
    let car = {make: "Nissan", model: "Micra", color: "blue", year: "2017"};
    document.getElementById("car").innerHTML = "I drive a " + car.color + " " + car.make + " " + car.model + ".";
}

// Return Statement Challenge
function greet_Function() {
    let name = document.getElementById("name").value;
    function return_Function(name) {
    return "Hello, " + name + "!";}
    document.getElementById("person").innerHTML = return_Function(name);
}
  
// Object Assignment 
function object_Function() {
    let car = {
    make: "Nissan",
    model: "Micra",
    year: "2017",
    color: "blue",
    description: function() {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
    }
};
document.getElementById("car_object").innerHTML = car.description();
}

// Break and Continue Challenge
function break_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 4) {break;}
    text += "The number is " + i + "<br>"
   }
   document.getElementById("break").innerHTML = text;
}

function continue_Function() {
    let text = "";
    for (let i = 0; i < 10; i++) {
    if (i === 4) {continue;}
    text += "The number is " + i + "<br>"
   }
   document.getElementById("continue").innerHTML = text;
}
