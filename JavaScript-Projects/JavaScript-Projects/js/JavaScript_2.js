function validateForm() {
    let x = document.forms["form"]["email"].value;
    if (x == "") {
        alert("Please enter your email address;");
        return false;
    }
}