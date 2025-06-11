<!-- @format -->

# 1. Registration Form Overview

This registration form is a assignment given by ostad. It is crafted with mobile-friendly layout and features an eye-catching color palette and used tailwind css cdn to style it perfectly.

## Key Features:

### Fields:

- **Full Name**: A text input for the user's complete name.
- **Username**: A text input for selecting a unique username.
- **Email**: A text input for entering a valid email address.
- **Phone Number**: A text input for providing a contact number.
- **Password**: A password input for setting a secure password.
- **Confirm Password**: A password input to verify the entered password.
  Gender: Radio buttons for selecting gender options (Male, Female, Other).

# 2. Task Manager JS and Bootstrap

Simple task manager app which stores data to localstorage as json format and when page loads it always makes sure to use the value from the localstorage

## Key Functions Used:

### Functions:

- **`addTaskToDOM(taskText, isCompleted)`**: Adds a new task to the DOM with a delete button and clickable text to toggle completion.

- **`saveTaskToLocalStorage(task)`**: Saves a new task to localStorage as part of an array after converting it to a JSON string.

- **`getTasksFromLocalStorage()`**: Retrieves and parses tasks from localStorage, returning them as a JavaScript array.

- **`removeTaskFromLocalStorage(taskText)`**: Removes a specific task from the localStorage array by matching its text content.

- **`updateTaskInLocalStorage(listItem, taskText)`**: Updates the completion status (completed: true/false) of a task in localStorage.

- **`showAlert(message, type)`**: Displays a Bootstrap-styled alert (success/error) dynamically based on user action.

Project Short Presentation Video: [https://drive.google.com/file/d/1OgMtyYw4CyX9egFbSQOjnn1XvNdUpUvp/view?usp=sharing](https://drive.google.com/file/d/1OgMtyYw4CyX9egFbSQOjnn1XvNdUpUvp/view?usp=sharing)

Tareq Monower
