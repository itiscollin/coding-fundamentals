const todos = JSON.parse(localStorage.getItem("todos")) || []

function syncTodosToDOM(){
    
    const taskList = document.querySelector(".task-list")
    taskList.innerHTML = ""
    todos.forEach((todo,index) => {
        if(filterPriority.checked && todo.isPriority === false) return
        if(filterNonPriority.checked && todo.isPriority === true) return
        if(filterCompleted.checked && todo.isCompleted === false) return
        
        const todoItem = document.createElement("div")
        todoItem.classList.add("task-item")

        if(todo.isPriority){
            todoItem.classList.add("priority")
        }

        if(todo.isCompleted){
            todoItem.classList.add("completed")
        }

        todoItem.innerHTML = `
        <input type="checkbox" onchange="toggleTodo(${index})" ${todo.isCompleted ? "checked" :""}>
        <p>${todo.title}</p>
        <button class="prioritize-btn" onclick="togglePriority(${index})"> Prioritize </button>
        <button class="delete-btn" onclick="removeTodo(${index})"> Delete </button>
        `
        taskList.appendChild(todoItem)
    })
    
    localStorage.setItem(`todos`, JSON.stringify(todos))
}

function addTodo(){
    const input = document.querySelector(".add-todo-form input")
    value = input.value
    if(value ===""){
        return
    }

    const newTodo = {
        title: value,
        isCompleted: false,
        isPriority: false
    }

    todos.push(newTodo)
    syncTodosToDOM()
    input.value=""
}

function removeTodo(index){
    todos.splice(index,1)
    syncTodosToDOM()
}

function toggleTodo(index){
    todos[index].isCompleted = !todos[index].isCompleted
    syncTodosToDOM()
}

function togglePriority(index){
    todos[index].isPriority = !todos[index].isPriority
    syncTodosToDOM()
}
const form = document.querySelector(".add-todo-form")
form.addEventListener('submit', (e) => e.preventDefault())

const filerAll = document.querySelector("#filter-all")
const filterPriority = document.querySelector("#filter-priority")
const filterNonPriority = document.querySelector("#filter-non-priority")
const filterCompleted = document.querySelector("#filter-completed")

filerAll.addEventListener("change", () => syncTodosToDOM())
filterPriority.addEventListener("change", () => syncTodosToDOM())
filterNonPriority.addEventListener("change", () => syncTodosToDOM())
filterCompleted.addEventListener("change", () => syncTodosToDOM())

syncTodosToDOM()