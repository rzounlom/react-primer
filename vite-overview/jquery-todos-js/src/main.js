$(document).ready(function () {
  const BASE_URL = "http://localhost:3002/todos";

  // CRUD API functions
  const fetchTodos = async function () {
    try {
      const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodo = async function (id) {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const addTodo = async function (todo) {
    try {
      // Call the fetch API to add a new todo
      await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json: This is because we are sending a JSON payload
        },
        body: JSON.stringify(todo), // Convert the object to a JSON string
      });

      // Call the render function to render the updated list
      await render();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async function (id, todo) {
    try {
      // Call the fetch API to update a todo
      await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json: This is because we are sending a JSON payload
        },
        body: JSON.stringify(todo), // Convert the object to a JSON string
      });

      // Call the render function to render the updated list
      await render();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async function (id) {
    try {
      // Call the fetch API to delete a todo
      await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Set the content type to application/json: This is because we are sending a JSON payload
        },
      });

      // Call the render function to render the updated list
      await render();
    } catch (error) {
      console.log(error);
    }
  };

  // Function to render the todos
  async function render() {
    // Fetch the todos
    const todos = await fetchTodos();

    // console.log({ todos });

    // Clear the current list
    $("#todoList").empty();

    // Loop through the todos array and append each todo to the list
    todos.forEach(function (todo) {
      let todoItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span class="todo-text ${
                                      todo.completed ? "completed" : ""
                                    }">${todo.text}</span>
                                    <div>
                                        <button class="btn btn-sm btn-secondary editTodo" data-index="${
                                          todo.id
                                        }">Edit</button>
                                        <button class="btn btn-sm btn-success toggleTodo" data-index="${
                                          todo.id
                                        }">${
        todo.completed ? "Incomplete" : "Complete"
      }</button>
                                        <button class="btn btn-sm btn-danger deleteTodo" data-index="${
                                          todo.id
                                        }">Delete</button>
                                    </div>
                                </li>`;
      $("#todoList").append(todoItem);
    });
  }

  render();

  // Add a new to-do
  $("form").submit(async function (event) {
    event.preventDefault(); //stops the page from refreshing
    let todoText = $("#newTodo").val()?.trim();
    if (todoText !== "") {
      await addTodo({
        text: todoText,
        completed: false,
      });
      $("#newTodo").val("");
    } else {
      alert("Please enter a to-do");
    }
  });

  // Toggle todo as completed or not completed
  $(document).on("click", ".toggleTodo", async function () {
    // find the todo id from the data-index attribute
    let todoId = $(this).attr("data-index");
    if (!todoId) {
      console.log("todo not found");
      return;
    }

    try {
      // find the todo item by id
      let todoItem = await fetchTodo(todoId);
      if (!todoItem) {
        console.error("Todo item not found");
        return;
      }

      // update the todo item
      todoItem.completed = !todoItem.completed;

      // call the update function
      await updateTodo(todoId, todoItem);
    } catch (error) {
      console.error("Error toggling todo", error);
    }
  });

  // Delete a todo
  $(document).on("click", ".deleteTodo", async function () {
    let todoId = $(this).attr("data-index");
    // console.log({ todoId });
    if (!todoId) {
      console.error("Todo item not found");
      return;
    }
    try {
      // Call the delete API function
      await deleteTodo(todoId);
    } catch (error) {
      console.error("Error deleting todo", error);
    }
  });

  // Edit a todo
  $(document).on("click", ".editTodo", async function (event) {
    event.preventDefault();
    let todoTextElement = $(this).closest("li").find(".todo-text");
    let todoId = $(this).attr("data-index");
    let currentText = todoTextElement.text();
    let newText = prompt("Edit your to-do:", currentText);

    if (!todoId) {
      console.error("Todo item not found");
      return;
    }

    if (newText !== null && newText.trim() !== "") {
      try {
        // Find the todo item by id
        let todoItem = await fetchTodo(todoId);
        // Check if the todo item exists
        if (!todoItem) {
          console.error("Todo item not found");
          return;
        }

        // Update the todo item
        todoItem.text = newText.trim();
        // Call the update function
        await updateTodo(todoId, todoItem);
      } catch (error) {
        console.error("Error updating todo", error);
      }
    }
  });
});
