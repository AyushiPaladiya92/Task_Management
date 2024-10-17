Frontend Task Manager
Overview
The Task Manager is a web application designed to streamline team task management, providing a user-friendly interface for efficient task assignment, tracking, and collaboration. Built with React, it focuses solely on the client-side experience, making use of modern frontend technologies like Redux Toolkit, Headless UI, and Tailwind CSS to enhance performance and user experience.

Why/Problem?
Effective task management is crucial in any team environment. Managing tasks through spreadsheets or manual systems can be inefficient. This application provides a streamlined solution for task tracking, helping teams stay organized and productive.

Features
User Features:
Task Interaction:
Change task status (in progress or completed) and view detailed task information.

Task Management:
Assign tasks to users, set priorities, and categorize tasks as "todo", "in progress", or "completed."

Comments and Collaboration:
Add comments or chat to task activities to facilitate communication.

General Features:
Authentication and Authorization:
Users can log in securely, with role-based access control for different features.

Profile Management:
Users can update their profiles and securely change passwords.

Dashboard:
View a summary of task activities and filter tasks based on their status (todo, in progress, or completed).

Technologies Used:
Frontend:
React (Vite)
Redux Toolkit for State Management
Headless UI
Tailwind CSS for styling
Setup Instructions
Client Setup
Environment Variables
Create a .env file in the client folder and add the following environment variables:

makefile
Copy code
VITE_APP_BASE_URL = http://localhost:8800  # Adjust the port if necessary.
VITE_APP_FIREBASE_API_KEY = your_firebase_api_key_here
Steps to Run the Client
Open the project in your code editor.
Navigate to the client directory:
bash
Copy code
cd client
Install the required packages:
bash
Copy code
npm install
Run the client application:
bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to view the app.

