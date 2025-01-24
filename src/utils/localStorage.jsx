const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Report",
        description: "Finish the quarterly sales report.",
        date: "2025-01-20",
        category: "Sales",
        statusActive: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the monthly team meeting.",
        date: "2025-01-21",
        category: "Meetings",
        statusActive: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Follow-Up",
        description: "Call the client for project updates.",
        date: "2025-01-22",
        category: "Client Relations",
        statusActive: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      new: 2,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Perform inventory count for January.",
        date: "2025-01-15",
        category: "Inventory",
        statusActive: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Marketing Plan",
        description: "Draft the marketing plan for Q1.",
        date: "2025-01-16",
        category: "Marketing",
        statusActive: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Product Review",
        description: "Review the new product design.",
        date: "2025-01-18",
        category: "Product",
        statusActive: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskCounts: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Database",
        description: "Update customer information in the database.",
        date: "2025-01-19",
        category: "Database",
        statusActive: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Training Session",
        description: "Conduct a training session for new hires.",
        date: "2025-01-20",
        category: "HR",
        statusActive: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      new: 1,
      completed: 0,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Fixes",
        description: "Resolve critical bugs reported by QA.",
        date: "2025-01-22",
        category: "Development",
        statusActive: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "System Upgrade",
        description: "Upgrade the company’s server systems.",
        date: "2025-01-23",
        category: "IT",
        statusActive: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskCounts: {
      active: 1,
      new: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Anaya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Content Writing",
        description: "Write blog posts for the company website.",
        date: "2025-01-21",
        category: "Content",
        statusActive: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Updates",
        description: "Update company’s social media profiles.",
        date: "2025-01-22",
        category: "Marketing",
        statusActive: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskCounts: {
      active: 2,
      new: 1,
      completed: 0,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    firstName: "Rohan",
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees",JSON.stringify(employees));
  localStorage.setItem("admin",JSON.stringify(admin));
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees, admin}
  
}