import { createContext, useContext, useEffect, useState } from "react";

export const EmployeesContext = createContext(null);

export const EmployeesProvider = ({ children })=>{
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem("employees"))||[]);
  useEffect(()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
  },[employees])
  return (
    <EmployeesContext.Provider value={{employees, setEmployees}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export const useEmployees = () => useContext(EmployeesContext);

