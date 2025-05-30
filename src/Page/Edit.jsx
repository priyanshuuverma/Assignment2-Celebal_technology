import React, { useState } from 'react';

const Edit = ({ task, updateTask }) => {
  const [val, setVal] = useState(task.task); // prefill with current task

  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.trim()) {
      updateTask(task.id, val); // update the task and exit editing mode
      setVal('');
    }
  };

  return (
    <div className="border rounded-full border-sky-800 text-black grid my-3">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="rounded-full w-full px-3 py-2 outline-none border"
          type="text"
          placeholder="Edit your task"
        />
        <button
          type="submit"
          className="text-white bg-sky-800 rounded-full py-2 px-4"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
