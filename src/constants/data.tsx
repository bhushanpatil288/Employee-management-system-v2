import type { Employee } from "@/context/EmployeesContext";

export const departments = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Human Resources" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Finance" },
  { id: 5, name: "Customer Support" }
];

export const positions = [
  { id: 1, title: "Software Engineer" },
  { id: 2, title: "HR Manager" },
  { id: 3, title: "Marketing Specialist" },
  { id: 4, title: "Financial Analyst" },
  { id: 5, title: "Support Executive" }
];

export const exampleEmployees: Employee[] = [
  {
    age: 34,
    department: "Marketing",
    id: 1,
    name: "John Doe",
    position: "Marketing Specialist",
  },
  {
    age: 25,
    department: "Engineering",
    id: 2,
    name: "Mayur",
    position: "Software Engineer",
  },
];