import { Button } from "../components/ui/button";
import { useEmployees } from "../context/EmployeesContext"

const Employees = () => {
  const { employees, setEmployees } = useEmployees();

  return (
    <div className="flex justify-center p-3">
      <table className="shadow-lg rounded-xl overflow-hidden">
        <tbody><tr>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">No.</th>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Name</th>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Age</th>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Department</th>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Position</th>
          <th className="bg-primary text-white  border dark:text-black dark:border-gray/80 text-left px-8 py-4">Action</th>
        </tr>
          {employees.map((e, idx) => {
            return (
              <tr key={e.id}>
                <td className="border dark:bg-secondary px-8 py-4">{idx + 1}</td>
                <td className="border dark:bg-secondary px-8 py-4">{e.name}</td>
                <td className="border dark:bg-secondary px-8 py-4">{e.age}</td>
                <td className="border dark:bg-secondary px-8 py-4">{e.position}</td>
                <td className="border dark:bg-secondary px-8 py-4">{e.department}</td>
                <td className="border dark:bg-secondary px-8 py-4">
                  <div className="flex gap-1">
                    <Button variant={"default"} className="cursor-pointer">Edit</Button>
                    <Button variant={"destructive"} className="cursor-pointer">Delete</Button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody></table>


    </div>
  )
}

export default Employees