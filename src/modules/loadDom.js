import {addTodo, removeToDo} from "./todoFunc";

import {format} from "date-fns"
import { el } from "date-fns/locale";

const main = document.getElementById("main");
const newTodoBtn = document.getElementById("new-todo");
const modalAdd = document.getElementById("overlay-add");
const overlayBg = document.getElementById("overlay-bg");
const todoForm = document.getElementById("todo-form");
const closeX = document.getElementById("close-modal");
const submitBtn = document.getElementById("todo-submit");


const addTodoItem = (todoData) => {
    
    displayTodo(todoData[todoData.length - 1]);
}

/* Displays the to-do using the inputs from the form */
const displayTodo = (todoData) => {

    const itemTodo = document.createElement("div");
    const todoComplete = document.createElement("div");
    const todoTitle = document.createElement("div");
    const btnDetails = document.createElement("button");
    const todoDate = document.createElement("div");
    const todoEdit = document.createElement("div");
    const todoDel = document.createElement("div");
    const iconEdit = document.createElement("img");
    const iconDel = document.createElement("img");

    itemTodo.classList.add("item-todo");
    todoComplete.classList.add("todo-complete");
    todoTitle.classList.add("todo-title");
    btnDetails.classList.add("details");
    todoDate.classList.add("todo-date")
    todoEdit.classList.add("todo-edit");
    todoEdit.classList.add("icon");
    todoDel.classList.add("todo-del");
    todoDel.classList.add("icon");

    todoTitle.textContent = todoData.title;
    btnDetails.textContent = "DETAILS";
    
    /*convert date into an string with the format "Jan 12th" */
    const dateObject = new Date(todoData.date);
    const dateMonth = format(dateObject, "MMM");
    const dateDay = format(dateObject, "do");
    const dateFormated = `${dateMonth} ${dateDay}`;
    
    todoDate.textContent = dateFormated;

    iconEdit.src = "images/note-edit.svg";
    iconEdit.alt = "edit icon";

    iconDel.src = "images/trash-can.svg";
    iconDel.alt = "delete icon";

    todoDel.appendChild(iconDel);
    todoEdit.appendChild(iconEdit);

    itemTodo.appendChild(todoComplete);
    itemTodo.appendChild(todoTitle);
    itemTodo.appendChild(btnDetails);
    itemTodo.appendChild(todoDate);
    itemTodo.appendChild(todoEdit);
    itemTodo.appendChild(todoDel);

    main.appendChild(itemTodo);

    todoDel.addEventListener("click", () => {
        removeToDo(todoData.title);
        itemTodo.remove();
    })

}


/* opens the modal and deletes any previous unsubmitted data */
const setActive = (button, overlay, todoForm) => {
    todoForm.reset();
    button.classList.add("active");
    overlay.classList.add("active");
}

/* closes the modal */
const closeModal = (modalAdd, overlay) => {
    modalAdd.classList.remove("active");
    overlay.classList.remove("active");
}

/* Handles the interaction between de user and the UI */
const loadTodo = () => {

    let localData = JSON.parse(localStorage.getItem("todos"));

    for (let index in localData) {
        displayTodo(localData[index]);
    }
    
    newTodoBtn.addEventListener("click", (e) => {
        setActive(modalAdd, overlayBg, todoForm);
    });

    overlayBg.addEventListener("click", (e) => {
        closeModal(modalAdd, overlayBg);
    });

    closeX.addEventListener("click", (e) => {
        closeModal(modalAdd, overlayBg);
    });

    submitBtn.addEventListener("click", (e) => {
        let todoData = addTodo();
        addTodoItem(todoData);
        closeModal(modalAdd, overlayBg);
    });
}

export default loadTodo;