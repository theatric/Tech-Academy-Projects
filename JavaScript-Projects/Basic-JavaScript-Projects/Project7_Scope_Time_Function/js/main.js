// Local and Global Variable Assignment
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    var Y = 15;
    document.write(20 + Y + "<br>");
}
function Add_numbers_3() {
    document.write(20 - Y);
}
Add_numbers_1();
Add_numbers_2();
Add_numbers_3();

// Method Assignment (and Else Assignment)
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "Good evening.";
    }
}

// If Statement Assignment (and Else Assignment)
function get_Weekend() {
    var day = new Date().getDay();
    if (day < 1 || day > 5) {
        document.getElementById("weekend").innerHTML = "Are you enjoying the weekend?";
    }
    else {
       document.getElementById("weekend").innerHTML = "Have a good day at work.";
    }
}

// Else If Assignment
function get_Time() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time.";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}