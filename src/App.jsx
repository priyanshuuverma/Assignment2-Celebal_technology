import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Box from "./Page/Box";
import Tab from "./Page/Tab";
import Edit from "./Page/Edit";
import Footer from "./Page/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const updateTask = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask, isEditing: false } : todo
      )
    );
  };

  return (
   <>
    <div className="bg-white py-5 px-5 ">
      <div className="animate-pulse">
        <img
          className="lg:w-1/3 w-1/2 h-1/2 items-center"
          src="https://ctwebsite2025.blob.core.windows.net/media/celebalwebsite2025/assets_webp/common/images/ct-logo.webp"
          alt=""
        />
      </div>
      <div className="bg-sky-800 my-20 py-10  lg:mx-10 rounded-lg px-0.5 lg:px-5">
        <h1 className="text-white my-5 font-bold text-center text-3xl f2">Yes! You can do it</h1>
        <div className=" px-1 lg:px-5 py-10  lg:w-xl mx-auto rounded-xl bg-white">
          <Box addTodo={addTodo} />
          {todos.map((arr, ind) =>
            arr.isEditing ? (
              <Edit
                key={arr.id}
                task={arr}
                updateTask={updateTask}
              />
            ) : (
              <Tab
                task={arr}
                index={ind}
                key={arr.id}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
      </div>
      
    </div>
   </>
    
  );
};

export default App;
