// JSON.stringify() ASSIGNMENT
var dog1 = {name: "Toby", breed: "Yorkshire Terrier", color: "brown", age: "3"};

var JSONstring = JSON.stringify(dog1);
document.getElementById("myDog").innerHTML = JSONstring;


// JSON.parse() METHOD ASSIGNMENT
var dog2 = '{"name": "Toby", "breed": "Yorkshire Terrier", "color": "brown", "age": "3"}';

var JSONstring = JSON.parse(dog2);
document.getElementById("yourDog").innerHTML = JSONstring.name + " the " + JSONstring.color + " " + JSONstring.breed + ".";

// LOCAL STORAGE METHOD ASSIGNMENT
localStorage.setItem("Name", "Toby");
document.getElementById("hisDog").innerHTML = localStorage.getItem("Name");

// ONDBLCLICK() ASSIGNMENT
function myFunction() {
    document.getElementById("example").style.color="red";
}