import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTask';
import { Toaster } from 'react-hot-toast';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light'); // Add state for theme

  // Retrieve tasks from localStorage on initial load
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Filter tasks based on search term
  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle between light and dark theme
  const toggleTheme = () => setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster />
      <div
        className={`w-screen h-screen flex flex-col items-center p-4 pt-20 gap-8 overflow-y-auto ${
          theme === 'light' ? 'bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400' : 'bg-gradient-to-r from-gray-800 via-gray-900 to-black'
        }`}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${theme === 'light' ? 'bg-blue-600' : 'bg-yellow-400'} text-white`}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>

        {/* Main Heading */}
        <h1 className={`text-4xl font-extrabold mb-6 text-shadow ${theme === 'light' ? 'text-white' : 'text-gray-200'}`}>
          Task Manager
        </h1>

        {/* Pass searchTerm and setSearchTerm to CreateTask */}
        <CreateTask tasks={tasks} setTasks={setTasks} searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={theme} />

        {/* Pass filtered tasks to ListTasks */}
        <ListTasks tasks={filteredTasks} setTasks={setTasks} theme={theme} />
      </div>
    </DndProvider>
  );
}

export default App;
