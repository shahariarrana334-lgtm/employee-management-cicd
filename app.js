
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const employees = [
  {
    id: 101,
    name: "John Smith",
    department: "IT",
    designation: "Software Developer"
  },
  {
    id: 102,
    name: "Sarah Johnson",
    department: "HR",
    designation: "HR Manager"
  },
  {
    id: 103,
    name: "David Brown",
    department: "Finance",
    designation: "Accountant"
  }
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Employee Management System",
    totalEmployees: employees.length,
    employees: employees
  });
});

app.get("/employees", (req, res) => {
  res.status(200).json(employees);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Employee application is running successfully"
  });
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Employee application running on port ${PORT}`);
  });
}

module.exports = app;
