/* eslint-disable react-refresh/only-export-components -- context module exports hooks and types */
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import Swal from "sweetalert2";

export type Employee = {
  id: number;
  name: string;
  age: number;
  department: string;
  position: string;
};

type EmployeesContextValue = {
  employees: Employee[];
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
  addEmployee: (data: Omit<Employee, "id">) => void;
  updateEmployee: (employeeData: Employee) => void;
  deleteEmployee: (id: number) => void;
};

const exampleEmployees: Employee[] = [
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

const showAlert = (title: string) => {
  console.log(title);
  Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  }).fire({
    icon: "success",
    title: title,
  });
};

function loadStoredEmployees(): Employee[] {
  const raw = localStorage.getItem("employees");
  if (!raw) return exampleEmployees;
  try {
    return JSON.parse(raw) as Employee[];
  } catch {
    return exampleEmployees;
  }
}

export const EmployeesContext = createContext<EmployeesContextValue | undefined>(
  undefined,
);

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>(loadStoredEmployees);

  const addEmployee = (data: Omit<Employee, "id">) => {
    setEmployees((prev) => [...prev, { ...data, id: Date.now() }]);
    showAlert("Employee Added");
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
    const newEmployees = [...employees];
    newEmployees.splice(idx, 1);
    setEmployees(newEmployees);
    showAlert("Employee deleted");
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
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
