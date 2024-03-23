// FADE CHALLENGE
document.body.className = "faded";

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.className = "";
  }, 1000);
});

// FORM CHALLENGE
function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
    return false;
  }
}

// POPUP CONTACT FORM CHALLENGE
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// AUTOMATIC SLIDESHOW CHALLENGE
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 5000);

      
   