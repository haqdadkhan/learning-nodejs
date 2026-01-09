// --- IMPORTANT VARIABLES ---
const API = "http://localhost:3030/api/todos"
const todoList = document.getElementById("todoList")

// --- CREATE LOGIC ---
const addTodo = async () => {
    // get form data
    const todoTitle = document.getElementById("todoTitle").value
    const todoDescription = document.getElementById("todoDescription").value

    await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: todoTitle, description: todoDescription })
    })

    getTodos()
}

// --- GET LOGIC ---
const getTodos = async () => {
    const res = await fetch(API)
    const todo = await res.json()

    todoList.innerHTML = ""
    // mapping the todos
    todo.forEach((todoItem) => {
        todoList.innerHTML +=
            `
                <li>
                    <p>
                        <strong>Title: </strong> ${todoItem.title}
                    </p>
                    <p>
                        <strong>Description:</strong> ${todoItem.description}
                    </p>
                    <p>
                        <button
                            onclick="editTodo('${todoItem._id}', '${todoItem.title}','${todoItem.description}')">
                            Edit
                        </button>
                        <button
                            onclick="deleteTodo('${todoItem._id}')">
                            Delete
                        </button>
                    </p>
                </li>
            `
    })
}

// --- UPDATE LOGIC ---
const editTodo = async (id, title, description) => {
    const newTitle = prompt("Todo Title:", title)
    const newDescription = prompt("Todo Description:", description)

    const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTitle, description: newDescription })
    })

    getTodos()
}

// --- DELETE LOGIC ---
const deleteTodo = async (id) => {
    const okay = confirm("R u sure, you want to delete this Todo?")

    if (okay) {
        console.log("Deleetinggggggg", id)
        await fetch(`${API}/${id}`, { method: "DELETE" })
    }
}

getTodos()
