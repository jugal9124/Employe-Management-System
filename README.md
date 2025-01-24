# Employee Management System

A simple Employee Management System built with **React.js**. This project allows users to perform basic CRUD (Create, Read, Update, Delete) operations to manage employee data. Instead of using a backend, it leverages the browser's **LocalStorage** for data persistence.

## Features

- Add new employees.
- View the list of employees.
- Data persistence using browser **LocalStorage**.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **LocalStorage**: Browser-based storage for saving employee data persistently.
- **Tailwind**: For styling the application.

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

- Node.js (v14 or above)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jugal9124/Employe-Management-System.git
   ```

2. Navigate to the project directory:

   ```bash
   cd employee-management-system
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```


## Deployment

This application can be easily deployed using platforms like:

- **Netlify**
- **Vercel**
- **GitHub Pages**

### Steps to Deploy on GitHub Pages

1. Install the `gh-pages` package:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to your `package.json`:

   ```json
   "homepage": "https://<your-username>.github.io/employee-management-system",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the application:

   ```bash
   npm run deploy
   ```

4. Your application will be live at:

   ```
   https://<your-username>.github.io/employee-management-system
   ```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to match your project details!

