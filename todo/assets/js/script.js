let add = document.querySelector('#add');
add.addEventListener('click', addTask);
let taskNumber = 1;
let taskArray = [];
let howManyTasks = 0;
let isImportant = false;

let comment = "<p>You have nothing to do...</p>";
let relax = '<img src="/assets/img/relax.svg" height="70%" width="70%">';



function isEmpty() {
    let uiel = document.querySelector('#tasks-list');
    if (howManyTasks == 0)
    document.querySelector('#comment').innerHTML = relax;
    else document.querySelector('#comment').innerHTML = "";
} 

isEmpty();

function addTask() {
    howManyTasks++;
    let task = document.querySelector('#new-task').value;
    let deleteButton = '<button class="deleteButton" id="d'+taskNumber+'" type="submit" onclick="deleteTask('+taskNumber+')" ><i class="fa-solid fa-square-check" style="color: #179292;"></i></button>';
    let importantButton = '<button class="importantButton" id="i'+taskNumber+'" type="submit" onclick="importantTask('+taskNumber+')" ><i class="fa-regular fa-star" style="color: #179292;"></i></button>'
    let createdTask = '<li class="tclass" id="t'+taskNumber+'">'+task+deleteButton+importantButton+'</li>';
   
    taskArray.push(createdTask);
    joinedArray = taskArray.join(" ");
    document.querySelector('#tasks-list').innerHTML = joinedArray;

    taskNumber++;
    document.querySelector('#new-task').value = "";
    isEmpty();
}

function deleteTask(nr){
    howManyTasks--;
    let task = document.querySelector('#t'+nr);
    task.remove();
    // taskArray.pop();
    delete taskArray[nr-1];
    isEmpty();
}

function importantTask(nr){
    let task = document.querySelector('#t'+nr);
    if (isImportant == false)
    {
        task.classList.add('important');
        document.querySelector('#i'+nr).innerHTML = '<i class="fa-solid fa-star" style="color: #179292;"></i>';
        isImportant = true;
    }
    else
    {
        task.classList.remove('important');
        document.querySelector('#i'+nr).innerHTML = '<i class="fa-regular fa-star" style="color: #179292;"></i>';
        isImportant = false;
    }
    
    
}

