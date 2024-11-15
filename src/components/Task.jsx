import { useDrag } from "react-dnd";
import toast from "react-hot-toast";

const Task = ({ task, tasks, setTasks }) => {
   
    // useDrag hook for drag-and-drop functionality
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task", // This is the type of the draggable item
        item: { id: task.id }, // The unique identifier for this task
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(), // Monitor the dragging state
        }),
    }));

    // Function to handle task removal
    const handleRemove = (id) => {
        const filteredTasks = tasks.filter((t) => t.id !== id);

        // Update tasks in localStorage
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));

        // Update tasks in state
        setTasks(filteredTasks);

        // Show toast notification on task removal
        toast("Task Removed", { icon: "👍" });
    };

    return (
        <div
            ref={drag} // This makes the div draggable
            className={`relative p-4 mt-4 shadow-md rounded-md ${isDragging ? "opacity-50" : "opacity-100"} cursor-grab transition-opacity duration-300 bg-`}
        >
            {/* Task Name */}
            <p className="text-lg font-semibold text-yellow-50 ">{task.name}</p>

            {/* Remove Button */}
            <button
                className="absolute top-2 right-2 text-red-600 hover:text-red-800"
                onClick={() => handleRemove(task.id)}
                aria-label="Remove Task"
            >
                {/* Trash Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

            </button>
        </div>
    );
};

export default Task;
