const api = "https://jsonplaceholder.typicode.com/todos";

async function fetchTodo() {
  const dataJson = await fetch(api);
  const data = await dataJson.json();
  console.log(data);
}

fetchTodo();
