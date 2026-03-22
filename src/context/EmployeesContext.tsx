import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

const exampleEmployees = [
  {
    age: 34,
    department: "Marketing",
    id: 1,
    name: "John Doe",
    position: "Marketing Specialist"
  },
  {
    age: 25,
    department: "Engineering",
    id: 2,
    name: "Mayur",
    position: "Software Engineer"
  },
]


const showAlert = (title: string) => {
  console.log(title)
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  }).fire({
    icon: "success",
    title: title
  });
};

export const EmployeesContext = createContext(null);

export const EmployeesProvider = ({ children }) => {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees")) || exampleEmployees);

  const addEmployee = (data) =>{
    setEmployees((prev :[])=> [...prev, {...data, id: Date.now()}])
    showAlert("Employee Added");
  }

  const updateEmployee = (employeeData) => {
    const idx = employees.findIndex((emp) => employeeData.id == emp.id);
    const newEmployees = [...employees];
    newEmployees[idx] = employeeData;
    setEmployees(newEmployees);
    showAlert("Employee data updated");
  }

  const deleteEmployee = (id) => {
    const idx = employees.findIndex((emp) => id == emp.id);
    const newEmployees = [...employees];
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
    showAlert("Employee deleted");
  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees])
  return (
    <EmployeesContext.Provider value={{ employees, setEmployees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeesContext.Provider>
  )
}

export const useEmployees = () => useContext(EmployeesContext);

