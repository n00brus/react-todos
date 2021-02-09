import Todolist from "./todo/Todolist";
import React, { useEffect } from "react";
import Context from "./context";
// import AddTodo from "./todo/AddTodo";
import Loader from "./icons/Loader";
const AddTodo = React.lazy(() => import("./todo/AddTodo"));
function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setloading] = React.useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodos(json);
          setloading(false);
        }, 1000);
      });
  }, []);

  function toggletodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    console.log(title);
    setTodos(
      todos.concat([
        {
          title,
          id: todos[todos.length - 1].id + 1,
          completed: false,
        },
      ])
    );
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>React Todos</h1>

        <React.Suspense fallback={<div>loading...</div>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <Todolist todos={todos} onToggle={toggletodo} />
        ) : loading ? null : (
          <p>No TOdos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
