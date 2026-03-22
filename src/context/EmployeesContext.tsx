import { createContext, useContext, useEffect, useState } from "react";
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

export const EmployeesContext = createContext(null);

export const EmployeesProvider = ({ children })=>{
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees"))|| exampleEmployees);

  const updateEmployee = (employeeData)=>{
    const idx = employees.findIndex((emp)=>employeeData.id == emp.id);
    const newEmployees = [...employees];
    newEmployees[idx] = employeeData;
    setEmployees(newEmployees);
  }

  const deleteEmployee = (id) =>{
    const idx = employees.findIndex((emp)=>id == emp.id);
    const newEmployees = [...employees];
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
  }

  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
  },[employees])
  return (
    <EmployeesContext.Provider value={{employees, setEmployees, updateEmployee, deleteEmployee}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export const useEmployees = () => useContext(EmployeesContext);

