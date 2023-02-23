const createTodo = () => {
    const itemTodo = document.createElement("div");

    itemTodo.classList.add("item-todo");

    return itemTodo;
}

const setActive = (button, overlay, todoForm) => {
    todoForm.reset();
    button.classList.add("active");
    overlay.classList.add("active");
}

const closeModal = (modalAdd, overlay) => {
    modalAdd.classList.remove("active");
    overlay.classList.remove("active");
}

const loadTodo = () => {
    
    const main = document.getElementById("main");
    const newTodoBtn = document.getElementById("new-todo");
    const modalAdd = document.getElementById("overlay-add");
    const overlayBg = document.getElementById("overlay-bg");
    const todoForm = document.getElementById("todo-form");

    newTodoBtn.addEventListener("click", (e) => {
        setActive(modalAdd, overlayBg, todoForm);
    });

    overlayBg.addEventListener("click", (e) => {
        closeModal(modalAdd, overlayBg);
    });
}

export default loadTodo;