/* eslint-disable react-refresh/only-export-components -- context module exports hooks and types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { showAlert } from "../utils/alerts";
import { loadStoredEmployees, loadDeletedEmployees } from "@/utils/localStorage";


export type Employee = {
  id: number;
  name: string;
  age: number;
  department: string;
  position: string;
};

type EmployeesContextValue = {
  employees: Employee[];
  deletedEmployees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  setDeletedEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  addEmployee: (data: Omit<Employee, "id">, message: string) => void;
  updateEmployee: (employeeData: Employee) => void;
  deleteEmployee: (id: number) => void;
  restoreEmployee: (id: number) => void;
};



export const EmployeesContext = createContext<EmployeesContextValue | undefined>(
  undefined,
);

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>(loadStoredEmployees());
  const [ deletedEmployees, setDeletedEmployees ] = useState<Employee[]>(loadDeletedEmployees());

  const addEmployee = (data: Omit<Employee, "id">, message: string) => {
    setEmployees((prev) => [...prev, { ...data, id: Date.now() }]);
    message ? showAlert(message) : showAlert("Employee Added");
  };

  const updateEmployee = (employeeData: Employee) => {
    const idx = employees.findIndex((emp) => employeeData.id === emp.id);
    const newEmployees = [...employees];
    newEmployees[idx] = employeeData;
    setEmployees(newEmployees);
    showAlert("Employee data updated");
  };

  const deleteEmployee = (id: number) => {
    const idx = employees.findIndex((emp) => id === emp.id);
    setDeletedEmployees((prev) => [...prev, employees[idx]]);
    const newEmployees = [...employees];
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
    showAlert("Employee deleted");
  };

  const restoreEmployee = (id: number) =>{
    const employeeToRestore = deletedEmployees.find((e)=> e.id === id);
    if (!employeeToRestore){
      showAlert("Employee not found");
      return;
    };
    const deletedEmployeesUpdated = deletedEmployees.filter((e)=>e.id != id);
    setDeletedEmployees(deletedEmployeesUpdated);
    addEmployee(employeeToRestore, "Employee Restored");
  }

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("deletedEmployees", JSON.stringify(deletedEmployees));
  }, [employees, deletedEmployees]);
  
  return (
    <EmployeesContext.Provider
      value={{
        employees,
        deletedEmployees,
        setEmployees,
        setDeletedEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        restoreEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = (): EmployeesContextValue => {
  const ctx = useContext(EmployeesContext);
  if (!ctx) {
    throw new Error("useEmployees must be used within EmployeesProvider");
  }
  return ctx;
};
