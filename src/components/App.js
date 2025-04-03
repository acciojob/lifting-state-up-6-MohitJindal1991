import React, { useState } from "react";
import Todo from "./Todo.jsx";

const App = () => {
  const initialTodos = [
    { id: "1", task: "Learn React", completed: false },
    { id: "2", task: "Build a React App", completed: false },
    { id: "3", task: "Deploy a React App", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  function clickHandler(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <ul>
        {todos.map((ele) => (
          <Todo
            key={ele.id}
            id={ele.id}
            isCompleted={ele.completed}
            handler={() => clickHandler(ele.id)} // Pass ID to handler
            task={ele.task}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
