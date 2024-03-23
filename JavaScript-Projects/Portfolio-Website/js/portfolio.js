// PAGE FADE-IN EFFECT
document.body.className = "faded";

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.className = "";
  }, 600);
});

// SLIDESHOW

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

// 
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// CONTACT FORM 

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

document.addEventListener("click", function(event){
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".popup-button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )