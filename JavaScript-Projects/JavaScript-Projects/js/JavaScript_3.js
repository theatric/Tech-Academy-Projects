// Data Attribute Assignment
function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}

// Arrow Function Challenge
let hello = "";
hello = function() {
    return "Hello World!";
}
document.getElementById("regular-function").innerHTML = hello();

let goodbye = "";
goodbye = () => "Goodbye World!";
document.getElementById("arrow-function").innerHTML = goodbye();

// .Some() Method Challenge
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

document.getElementById("some").innerHTML = "Some over 18 is " + someOver18;

function myFunction(value, index, array) {
  return value > 18;
}
