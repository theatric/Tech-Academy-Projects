// Dictionaries Assignment 
function my_Dictionary() {
    var animal = {
        species: "dog",
        color: "white",
        breed: "terrier",
        age: 3,
        sound: 'bark',
    };
    delete animal.color;
    document.getElementById("dictionary").innerHTML = "The " +  animal.color + " " + animal.breed + " goes " + animal.sound + "!";
}