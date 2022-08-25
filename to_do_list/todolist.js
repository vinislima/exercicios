;(function() {
    "use strict"

    //armazenar o DOM em variáveis
    const itemInput = document.getElementById("item-input");
    const toDoAddForm = document.getElementById("todo-add");

    toDoAddForm.addEventListener("submit", function(e) {
        e.preventDefault();
        console.log(itemInput.value);
        ul.innerHTML += `
            <li class="todo-item">
                <p class="task-name">${itemInput.value}</p>
            </li>
        `
            
        
    })
})()