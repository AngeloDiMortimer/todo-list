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

const addTodo = () => {
    let todoItem = getFormInput();
    console.log(todoItem.title);
    console.log(todoItem.details);
    console.log(todoItem.date);
    console.log(todoItem.priority);
}

export default addTodo;