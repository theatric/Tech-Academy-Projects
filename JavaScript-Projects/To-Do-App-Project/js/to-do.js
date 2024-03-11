// this function gets the task from input 
function get_tasks() {
    // this creates an array of tasks that are inputted 
    var tasks = new Array;
    // this pulls the task that was saved in the web browser memory 
    var tasks_str = localStorage.getItem('task');
    console.log(tasks_str);
    // if the input is not null then JSON.parse will 
    // communicate with the web browser to make the task a JavaScript object 
    if (tasks_str !== null) {
        tasks = JSON.parse(tasks_str);
    }
    return tasks;
}

// this function adds the inputted task to the get_tasks function array 
function add() {
    // this takes the inputted task and creates a variable of it 
    var item = document.getElementById('item').value;

    var tasks = get_tasks();
    // this adds a new task to the end of the array 
    tasks.push(item);
    // this converts the task input to a JSON string 
    localStorage.setItem('task', JSON.stringify(tasks));
    document.getElementById('item').value = "";
    location.reload();
    show();

    return false;
}

// this function keeps the tasks permanently displayed on the screen 
function show() {
    // this sets the task that was retrieved as a variable 
    var tasks = get_tasks();

    // this sets up each task as an unordered list 
    var html = '<ul>';
    // this displays a task to the list in the order that it is inputted 
    for (var i = 0; i < tasks.length; i++) {
        // this also displays the task as a list and creates the button with the "x" 
        html += '<li>' + tasks[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // this displays the tasks as a list 
    document.getElementById('tasks').innerHTML = html;
}
// this displays the inputted task when the 'Add Item' button is clicked 
document.getElementById('add').addEventListener('click', add);
// this will keep the inputs displayed permanently on the screen 
show();




//var dog = {name: "Toby", breed: "Yorkshire Terrier", color: "brown", age: "3"};

//var dog = '{"name": "Toby", "breed": "Yorkshire Terrier", "color": "brown", "age": "3"}';

//var JSONstring = JSON.stringify(dog);
//document.getElementById("myDog").innerHTML = JSONstring;

//var JSONstring = JSON.parse(dog);
//document.getElementById("yourDog").innerHTML = JSONstring.name + " the " + JSONstring.color + " " + JSONstring.breed + ".";