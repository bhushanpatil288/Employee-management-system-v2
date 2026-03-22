import { createContext, useContext, useEffect, useState } from "react";

export const EmployeesContext = createContext(null);

export const EmployeesProvider = ({ children })=>{
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees"))||[]);

  const updateEmployee = (employeeData)=>{
    const id = employees.findIndex((emp)=>employeeData.id == emp.id);
    const newEmployees = [...employees];
    newEmployees[id] = employeeData;
    setEmployees(newEmployees);
  }

  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
  },[employees])
  return (
    <EmployeesContext.Provider value={{employees, setEmployees, updateEmployee}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export const useEmployees = () => useContext(EmployeesContext);

