import { createContext, useContext, useState } from "react";

export const EmployeesContext = createContext(null);

export const EmployeesProvider = ({ children })=>{
  const [employees, setEmployees] = useState([{name: "Mayur"}, {name: "Bhushan"}]);
  return (
    <EmployeesContext.Provider value={{employees, setEmployees}}>
      {children}
    </EmployeesContext.Provider>
  )
}

export const useEmployees = () => useContext(EmployeesContext);

