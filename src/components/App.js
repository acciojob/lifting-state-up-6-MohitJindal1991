import React from "react";
import './../styles/App.css';
import Todo from "./Todo.jsx";

const App = () => {
  const todolist = [
    {
      id: "1",
      task: "Learn React",
      completed: "false",
    },
    {
      id: "2",
      task: "Build a React App",
      completed: "false",
    },
    {
      id: "3",
      task: "Deploy a React App",
      completed: "false",
    },
  ];
  return (
    <div>
      {/* Do not remove the main div */}
      <ul>
        {todolist.map((ele) => (
          <Todo key={ele.id} isCompleted={ele.completed} task={ele.task} />
        ))}
      </ul>
    </div>
  );
};

export default App;
