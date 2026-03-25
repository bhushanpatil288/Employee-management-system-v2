import { exampleEmployees } from "@/constants/data";
import type { Employee } from "@/context/EmployeesContext";

function loadStoredEmployees(): Employee[] {
    const raw = localStorage.getItem("employees");
    if (!raw) return exampleEmployees;
    try {
      return JSON.parse(raw) as Employee[];
    } catch {
      return exampleEmployees;
    }
  }

function loadDeletedEmployees(): Employee[] {
  const raw = localStorage.getItem("deletedEmployees");
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Employee[];
  } catch {
    return [];
  }
}
export { loadStoredEmployees, loadDeletedEmployees };