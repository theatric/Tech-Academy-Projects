// Ternary Operators Constructors Assignment
function ride_Function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

// Ternary Operators Challenge
function vote_Function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

//Coding Assignment
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

//New Keyword Assignment
var Jane = new Vehicle("Nissan", "Micra", 2017, "blue");
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Jane drives a " + Jane.Vehicle_Color + "-coloured " + Jane.Vehicle_Model + " manufactured in " + Jane.Vehicle_Year + ".";
}

// Nested Functions Assignment
function Nested_Function() {
    document.getElementById("nested").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function Minus_one() {
            starting_point -=1;
        }
        Minus_one();
        return starting_point;
   }
}