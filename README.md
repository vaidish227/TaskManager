<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager - README</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; max-width: 800px; margin: auto; }
    h1 { font-size: 2em; color: #333; }
    h2 { color: #007acc; }
    h3 { color: #333; }
    p { margin: 10px 0; }
    ul { list-style-type: disc; margin-left: 20px; }
    code { background-color: #f4f4f4; padding: 2px 5px; border-radius: 4px; }
    .screenshot { border: 1px solid #ccc; border-radius: 8px; padding: 5px; width: 100%; }
    .commands { background-color: #f4f4f4; padding: 10px; border-radius: 8px; margin: 10px 0; }
  </style>
</head>
<body>

<h1>Task Manager</h1>

<p>A modern Task Manager application built with React and Drag and Drop (DND) functionality, designed for task management with light and dark theme customization. Users can create, organize, and manage tasks in three statuses: Todo, In Progress, and Closed, with seamless drag-and-drop support for task transitions.</p>

<h2>Features</h2>
<ul>
  <li><strong>Add, Search, and Remove Tasks:</strong>
    <ul>
      <li>Easily create tasks with names between 3-100 characters.</li>
      <li>Search tasks dynamically using the search bar.</li>
      <li>Delete tasks effortlessly.</li>
    </ul>
  </li>
  <li><strong>Drag-and-Drop Task Management:</strong> Drag tasks between "Todo," "In Progress," and "Closed" sections to update their status.</li>
  <li><strong>Light and Dark Mode Themes:</strong> A visually appealing toggler allows switching between light and dark themes with gradient styling.</li>
  <li><strong>Persistent Storage:</strong> Tasks are saved in <code>localStorage</code>, ensuring data is retained even after refreshing the browser.</li>
</ul>

<h2>Setup and Launch</h2>
<p>Follow these steps to set up and launch the application locally:</p>

<ol>
  <li><strong>Clone the Repository</strong>
    <div class="commands">
      <code>git clone https://github.com/yourusername/task-manager.git</code><br>
      <code>cd task-manager</code>
    </div>
  </li>

  <li><strong>Install Dependencies</strong>
    <p>Ensure you have Node.js installed. Install the required dependencies using:</p>
    <div class="commands">
      <code>npm install</code>
    </div>
  </li>

  <li><strong>Run the Application</strong>
    <p>Start the development server:</p>
    <div class="commands">
      <code>npm start</code>
    </div>
    <p>The application will be available at <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>.</p>
  </li>

  <li><strong>Build for Production</strong>
    <p>To build a production-ready version:</p>
    <div class="commands">
      <code>npm run build</code>
    </div>
  </li>
</ol>

<h2>Assumptions Made During Development</h2>
<ul>
  <li><strong>Task Status:</strong> Tasks can only have one of the following statuses: Todo, In Progress, Closed.</li>
  <li><strong>Unique Task IDs:</strong> Each task is assigned a unique ID using <code>uuidv4</code> to prevent conflicts.</li>
  <li><strong>Validation:</strong> Task names must be at least 3 characters and not exceed 100 characters.</li>
  <li><strong>Responsive Design:</strong> The app is designed to work well on both desktop and mobile devices, with responsive layouts.</li>
  <li><strong>LocalStorage Usage:</strong> Data persistence is achieved through <code>localStorage</code>. It assumes a modern browser environment.</li>
</ul>

<h2>Screenshots</h2>
<p><strong>Light Mode</strong></p>
<img src="path/to/light-mode-screenshot.png" alt="Light Mode" class="screenshot">
<p><strong>Dark Mode</strong></p>
<img src="path/to/dark-mode-screenshot.png" alt="Dark Mode" class="screenshot">
<p><strong>Task Creation and Search</strong></p>
<img src="path/to/task-creation-screenshot.png" alt="Task Creation and Search" class="screenshot">
<p><strong>Drag-and-Drop Task Management</strong></p>
<img src="path/to/drag-drop-screenshot.png" alt="Drag-and-Drop Task Management" class="screenshot">

<h2>Technologies Used</h2>
<ul>
  <li><strong>React:</strong> For building the user interface.</li>
  <li><strong>React-DND:</strong> For drag-and-drop functionality.</li>
  <li><strong>React-Hot-Toast:</strong> For user-friendly toast notifications.</li>
  <li><strong>Tailwind CSS:</strong> For responsive and modern styling.</li>
  <li><strong>uuid:</strong> For generating unique task IDs.</li>
  <li><strong>localStorage:</strong> For data persistence.</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>

<p>Feel free to raise issues or contribute to the project. 🚀</p>

</body>
</html>
