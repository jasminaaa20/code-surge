# Employee Information Form

## Project Overview

This is a simple web-based Employee Information Form created for the **Code Surge: Monthly Coding Competition**. The form collects essential employee details such as full name, phone number, email address, date of birth, job position, department, and start date. It includes real-time validation to ensure the correct format for inputs before submission.

The project is built with **HTML**, **CSS**, and **JavaScript**, organized into separate files for easy maintenance and scalability.

## Features

- **Real-time Validation**: As users fill in the form, the input fields are validated instantly, and any incorrect formats are highlighted with error messages.
- **Error Handling**: If any input is invalid, the form will display appropriate error messages and prevent submission until the data is corrected.
- **Responsive Design**: The form is designed to work on all devices, from desktop computers to mobile phones, using media queries and flexible layouts.
- **Form Validation Rules**:
  - Phone number must follow the `123-456-7890` format.
  - Email must be a valid email address format.
  - Date of birth and start date cannot be in the future.

## Project Structure

The project is structured into three main directories:

```bash
/01
│
├── styles.css
│   
│
├── scripts.js
│   
│
└── index.html
```

## How to Run the Project Locally

1. **Download or clone the repository** to your local machine:

    ```bash
    git clone <your-repository-url>
    ```

2. **Navigate to the project directory**:

    ```bash
    cd project-directory
    ```

3. **Open the `index.html` file** in a browser by double-clicking on it or dragging it into your browser window.

Alternatively, if you are using **Visual Studio Code** or any other IDE, you can run it using a local development server:

- If using **VS Code**, install the **Live Server** extension and right-click on `index.html`, then select **Open with Live Server**.
- If using **Node.js**, you can use a simple HTTP server like `http-server`:

     ```bash
     npm install -g http-server
     http-server .
     ```

## Technologies Used

- **HTML5**: For the basic structure and content of the form.
- **CSS3**: For styling, including responsive design, error highlights, and form layout.
- **JavaScript (ES6)**: For form validation, real-time input checking, and dynamic error handling.

## Validation Logic

- **Phone Number**: Must match the format `123-456-7890`. If the format is incorrect, the field is outlined in red, and an error message is displayed.
- **Email Address**: Checks for a valid email format (e.g., `name@domain.com`).
- **Date of Birth & Start Date**: These fields ensure the entered dates are not in the future.
- **Submit Button**: The submit button is disabled until all fields are valid.
