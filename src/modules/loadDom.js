import addTodo from "./todoFunc";

const createTodo = () => {
    const itemTodo = document.createElement("div");

    itemTodo.classList.add("item-todo");

    return itemTodo;
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
    
    const main = document.getElementById("main");
    const newTodoBtn = document.getElementById("new-todo");
    const modalAdd = document.getElementById("overlay-add");
    const overlayBg = document.getElementById("overlay-bg");
    const todoForm = document.getElementById("todo-form");
    const closeX = document.getElementById("close-modal");
    const submitBtn = document.getElementById("todo-submit");

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
        addTodo();
    });
}

export default loadTodo;