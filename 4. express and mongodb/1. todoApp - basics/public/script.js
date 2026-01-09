// --- IMPORTANT VARIABLES ---
const API = "http://localhost:3030/api/todos"
const todoList = document.getElementById("todoList")

// --- CREATE LOGIC ---
const addTodo = async () => {
    // get form data
    const todoTitle = document.getElementById("todoTitle").value
    const todoDescription = document.getElementById("todoDescription").value

    try {
        await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: todoTitle, description: todoDescription })
        })

        todoTitle.value = ""
        todoDescription.value = ""

        getTodos()

    } catch (error) {
        console.log("Error creating todo:", error.message)
    }
}

// --- GET LOGIC ---
const getTodos = async () => {
    try {
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

    } catch (error) {
        console.log("Error fetching todos:", error.message)
    }
}

// --- UPDATE LOGIC ---
const editTodo = async (id, title, description) => {
    // getting new data
    const newTitle = prompt("Todo Title:", title)
    const newDescription = prompt("Todo Description:", description)

    try {
        if (newTitle && newDescription) {
            await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: newTitle, description: newDescription })
            })
        } else {
            alert("Either one or more fields are empty. Please try again.")
        }

        getTodos()

    } catch (error) {
        console.log("Error updating todo:", error.message)
    }
}

// --- DELETE LOGIC ---
const deleteTodo = async (id) => {
    const okay = confirm("R u sure, you want to delete this Todo?")

    try {
        if (okay) {
            await fetch(`${API}/${id}`, { method: "DELETE" })
        }

        getTodos()

    } catch (error) {
        console.log("Error deleting todo:", error.message)
    }
}

getTodos()
