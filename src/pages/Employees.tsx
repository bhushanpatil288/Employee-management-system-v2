import { Button } from "../components/ui/button";
import { useEmployees } from "../context/EmployeesContext"
import { OctagonX } from "lucide-react"
import { EditEmployeeModal } from "../components/EmployeesPage/EditEmployeeModal";
import { Link } from "react-router-dom";

const Employees = () => {
  const { employees, deleteEmployee } = useEmployees();

  return (
    <div className="flex justify-center p-3">
      <table className="shadow-lg rounded-xl overflow-hidden text-xs md:text-sm">
        <tbody>
          <tr>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">No.</th>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Name</th>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Age</th>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Department</th>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Position</th>
            <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Action</th>
          </tr>
          {
            Object.keys(employees).length != 0 ?
            employees.map((e, idx) => {
              return (
                <tr key={e.id}>
                  <td className="border dark:bg-secondary px-8 py-4">{idx + 1}</td>
                  <td className="border dark:bg-secondary px-8 py-4">{e.name}</td>
                  <td className="border dark:bg-secondary px-8 py-4">{e.age}</td>
                  <td className="border dark:bg-secondary px-8 py-4">{e.position}</td>
                  <td className="border dark:bg-secondary px-8 py-4">{e.department}</td>
                  <td className="border dark:bg-secondary px-8 py-4">
                    <div className="flex gap-1">
                      <EditEmployeeModal employeeData={e} />
                      <Button variant={"destructive"} className="cursor-pointer" onClick={() => deleteEmployee(e.id)}>
                        <OctagonX />
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            })
            :
            <tr className="text-center">
              <td className="border dark:bg-secondary px-8 py-4" colSpan={4}>Currently empty</td>
              <td className="border dark:bg-secondary px-8 py-4" colSpan={2}>
                <Link to={"/add"}>
                  <Button className="cursor-pointer">
                    Add now
                  </Button>
                </Link>
              </td>
            </tr>
          }
        </tbody>
      </table>



    </div>
  )
}

export default Employees