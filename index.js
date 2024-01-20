const axios = require("axios");

async function collectTodo(index) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${index}`,
    );
    return response.data;
  } catch (error) {
    console.error(`Error: TODO ${index}: ${error.message}`);
    return null;
  }
}

async function collectAllEvenTodos() {
  for (let i = 2; i <= 40; i += 2) {
    const todo = await collectTodo(i);
    if (todo)
      console.log(`Title: ${todo.title}\nCompleted: ${todo.completed}\n`);
  }
}

collectAllEvenTodos();
