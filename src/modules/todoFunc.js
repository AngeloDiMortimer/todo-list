let todosArray;

class Todo {
    constructor (title, details, date, priority) {

        this.title = title;
        this.details = details;
        this.date = date;
        this.priority = priority;

    }
}

const getFormInput = () => {
    const title = document.getElementById("new-todo-title").value;
    const details = document.getElementById("new-todo-details").value;
    const date = document.getElementById("new-todo-date").value;
    const priority = document.querySelector('input[name="create-new-priority"]:checked').value;

    return new Todo(title, details, date, priority);
}

const getEditInput = () => {
    let editTitle = document.getElementById("edit-todo-title").value;
    let editDetails = document.getElementById("edit-todo-details").value;
    let editDate = document.getElementById("edit-todo-date").value;
    let editPriority = document.querySelector('input[name="create-edit-priority"]:checked').value;

    return new Todo(editTitle, editDetails, editDate, editPriority);
}

const removeToDo = (title) => {
    
    if (localStorage.getItem("todos") === null) {
        todosArray = [];
    }

    else {
        todosArray = JSON.parse(localStorage.getItem("todos"));
    }

    let index = todosArray.findIndex(id => id.title == title);
    todosArray.splice(index, 1);
    console.log(index);
    
    localStorage.setItem("todos", JSON.stringify(todosArray));
}

const addEdit = (title) => {
    
    let editObj = getEditInput();

    if (localStorage.getItem("todos") === null) {
        todosArray = [];
    }

    else {
        todosArray = JSON.parse(localStorage.getItem("todos"));
    }

    let index = todosArray.findIndex(id => id.title == title);
    todosArray[index] = editObj;
    
    
    localStorage.setItem("todos", JSON.stringify(todosArray));

    
}

const addTodo = () => {
    
    let todoObj = getFormInput();

    if (localStorage.getItem("todos") === null) {
        todosArray = [];
    }

    else {
        todosArray = JSON.parse(localStorage.getItem("todos"));
    }

    todosArray.push(todoObj);
    localStorage.setItem("todos", JSON.stringify(todosArray));
    return todosArray;
}

export {
    addTodo,
    removeToDo,
    addEdit
};
