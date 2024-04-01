// PAGE FADE-IN EFFECT
// the body element is given the 'faded' class initially
document.body.className = "faded";

// the 'faded' class is removed once the page is loaded (after a 600 ms delay)
document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.className = "";
  }, 600);
});


// ADDS THE 'CURRENT' CLASS TO NAVBAR ELEMENTS
// targets the navigation container
var btnContainer = document.getElementById("navbar");

// takes all buttons with class name 'btn' and stores them in the variable array 'btns'
var btns = btnContainer.getElementsByClassName("btn");

// loops through the buttons and adds the 'current' class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("current");

    // if there's no 'current' class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" current", "");
    }

    // adds the 'current' class to the current/clicked button
    this.className += " current";
  });
}


// ADDS THE 'ACTIVE' CLASS TO SLIDESHOW ELEMENTS
// this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// this function changes the slide when the previous or next arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// this function changes the slide when the dots are clicked 
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // takes all elements with the class name 'mySlides' and stores them in the variable array 'slides'
    var dots = document.getElementsByClassName("dot"); // takes all elements with the class name 'dot' and stores them in the variable array 'dots'
    if (n > slides.length) {slideIndex = 1}; // if n (the number passed into the function) is greater than the length of the array 'slides', the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // if n (the number passed into the function) is less than 1, the slideIndex is set to the length of the array 'slides'
    for (j = 0; j < slides.length; j++) {
        slides[j].style.display = "none"; // this FOR loop takes each item in the array 'slides' and sets the display to none
    }
    for (j = 0; j < dots.length; j++) { 
        dots[j].className = dots[j].className.replace(" active", "")// this FOR loop takes each item in the array 'dots' and removes 'active', which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// CONTACT FORM 
// these functions open and close the contact form 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// this code will close the contact form when the user clicks away from it
// the first step is to add an event listener for any clicks on the website 
document.addEventListener("click", function(event){
  // if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class, then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".popup-button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )