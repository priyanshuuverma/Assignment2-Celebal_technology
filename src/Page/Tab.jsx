import React from "react";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const Tab = ({ task, index, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="bg-sky-800 items-center grid grid-cols-2 text-white text-lg my-3 py-2 px-5 rounded-full">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-300" : ""}`}
      >
        {index + 1}. {task.task === "Enter an item" ? "" : task.task}
      </p>
      <p className="flex gap-3 text-2xl cursor-pointer justify-end">
        <MdDelete onClick={() => deleteTodo(task.id)} /> <FaRegEdit onClick={() => editTodo(task.id)} />
      </p>
    </div>
  );
};

export default Tab;
