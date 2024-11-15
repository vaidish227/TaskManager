import { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {

    // State to hold filtered tasks by status
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    // useEffect hook to filter tasks whenever the tasks array changes
    useEffect(() => {
        // Filter tasks based on their status
        const fTodos = tasks.filter(task => task.status === "todo");
        const fInProgress = tasks.filter(task => task.status === "inprogress");
        const fClosed = tasks.filter(task => task.status === "closed");

        // Update state with filtered tasks
        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);

    }, [tasks]); // Dependency array: runs whenever `tasks` changes

    // Define the different statuses to pass as props to the Section component
    const statuses = ["todo", "inprogress", "closed"];

    return (
        <div className="flex flex-wrap gap-8 justify-between p-4">
            {/* Loop through statuses and render the Section component for each */}
            {statuses.map((status, index) => (
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />
            ))}
        </div>
    );
};

export default ListTasks;

