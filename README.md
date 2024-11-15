Task Manager

A modern Task Manager application built with React and Drag and Drop (DND) functionality, designed for task management with light and dark theme customization. Users can create, organize, and manage tasks in three statuses: Todo, In Progress, and Closed, with seamless drag-and-drop support for task transitions.
Features

    Add, Search, and Remove Tasks:
        Easily create tasks with names between 3-100 characters.
        Search tasks dynamically using the search bar.
        Delete tasks effortlessly.

    Drag-and-Drop Task Management:
        Drag tasks between "Todo," "In Progress," and "Closed" sections to update their status.

    Light and Dark Mode Themes:
        A visually appealing toggler allows switching between light and dark themes with gradient styling.

    Persistent Storage:
        Tasks are saved in localStorage, ensuring data is retained even after refreshing the browser.

Setup and Launch

Follow these steps to set up and launch the application locally:
1. Clone the Repository

git clone https://github.com/yourusername/task-manager.git
cd task-manager

2. Install Dependencies

Ensure you have Node.js installed. Install the required dependencies using:

npm install

3. Run the Application

Start the development server:

npm start

The application will be available at http://localhost:3000.
4. Build for Production

To build a production-ready version:

npm run build

Assumptions Made During Development

    Task Status:
        Tasks can only have one of the following statuses: Todo, In Progress, Closed.

    Unique Task IDs:
        Each task is assigned a unique ID using uuidv4 to prevent conflicts.

    Validation:
        Task names must be at least 3 characters and not exceed 100 characters.

    Responsive Design:
        The app is designed to work well on both desktop and mobile devices, with responsive layouts.

    LocalStorage Usage:
        Data persistence is achieved through localStorage. It assumes a modern browser environment.

Screenshots
Light Mode

Dark Mode

Task Creation and Search

Drag-and-Drop Task Management

Technologies Used

    React: For building the user interface.
    React-DND: For drag-and-drop functionality.
    React-Hot-Toast: For user-friendly toast notifications.
    Tailwind CSS: For responsive and modern styling.
    uuid: For generating unique task IDs.
    localStorage: For data persistence.

Feel free to raise issues or contribute to the project. 🚀
License

This project is licensed under the MIT License.

Let me know if you need adjustments or help adding the screenshots! 😊
 
