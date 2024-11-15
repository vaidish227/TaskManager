import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const CreateTask = ({ tasks, setTasks, searchTerm, setSearchTerm, theme }) => {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo",
  });

  // Handle form submission to add a new task
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) return toast.error("A task must have more than 3 characters");
    if (task.name.length > 100) return toast.error("A task must not be more than 100 characters");

    setTasks((prev) => {
      const list = [...prev, { ...task, id: uuidv4() }];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task Created");

    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <div
      className={`p-4 space-y-4 rounded-md border-y-2 ${
        theme === "dark"
          ? "bg-gradient-to-r from-gray-800 to-gray-900 border-gray-700 text-white"
          : "bg-gradient-to-r from-cyan-100 to-blue-200 border-gray-200 text-black"
      }`}
    >
      {/* Task creation form */}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
        <input
          type="text"
          className={`border-2 rounded-md px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 ${
            theme === "dark"
              ? "border-gray-600 bg-gray-700 text-white focus:ring-gray-500"
              : "border-gray-400 bg-slate-200 text-black focus:ring-cyan-500"
          }`}
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
          placeholder="Enter task name"
        />
        <button
          type="submit"
          className={`rounded-md px-4 py-2 mt-4 sm:mt-0 sm:w-32 focus:outline-none focus:ring-2 ${
            theme === "dark"
              ? "bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500"
              : "bg-cyan-500 text-white hover:bg-cyan-600 focus:ring-cyan-500"
          }`}
        >
          Create
        </button>
      </form>
      {/* Search bar */}
      <input
        type="text"
        className={`border-2 rounded-md px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 ${
          theme === "dark"
            ? "border-gray-600 bg-gray-700 text-white focus:ring-gray-500"
            : "border-gray-400 bg-slate-200 text-black focus:ring-cyan-500"
        }`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks"
      />
    </div>
  );
};

export default CreateTask;
