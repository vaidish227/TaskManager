import { useDrop } from "react-dnd";
import Task from "./Task";
import toast from "react-hot-toast";

const Section = ({ status, tasks, setTasks }) => {
  // Destructure the useDrop hook to monitor drag-and-drop state
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task", // Accepting items of type 'task'
    drop: (item) => addItemToSection(item.id), // When an item is dropped, update its status
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Track if a task is being dragged over the drop area
    }),
  }));

  // Determine the section's title and background color based on status
  let title = "Todo";
  let bgColor = "bg-orange-400";
  
  if (status === "inprogress") {
    title = "Set Priority";
    bgColor = "bg-purple-500";
  } else if (status === "closed") {
    title = "Completed";
    bgColor = "bg-green-500";
  }

  // Filter tasks by current section status
  const filteredTasks = tasks.filter((task) => task.status === status);

  // Function to update task status in the state and localStorage
  const addItemToSection = (id) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, status: status }; // Update the task status
        }
        return task; // Return the task unchanged if it doesn't match the id
      });

      // Update tasks in localStorage
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      // Show success toast
      toast("Task Status Changed", { icon: "👍" });

      return updatedTasks;
    });
  };

  return (
    <div
      ref={drop} // Attach the drop target
      className={`w-full sm:w-64 rounded-md p-4 ${isOver ? "bg-slate-200" : ""} shadow-md`}
    >
      {/* Header for the section */}
      <Header title={title} bgColor={bgColor} count={filteredTasks.length} />

      {/* Display tasks in this section if there are any */}
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks}  />
        ))
      ) : (
        <p className="text-gray-500 mt-2">No tasks in this section</p>
      )}
    </div>
  );
};

export default Section;

// Header Component to display section title and task count
const Header = ({ title, bgColor, count }) => {
  return (
    <div
      className={`${bgColor} flex items-center h-12 px-4 rounded-md uppercase text-sm text-white`}
    >
      {title}
      {/* Task count badge */}
      <div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
        {count}
      </div>
    </div>
  );
};
