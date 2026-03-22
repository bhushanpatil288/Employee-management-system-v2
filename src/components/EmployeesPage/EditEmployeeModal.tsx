import { SquarePen } from "lucide-react"
import { departments, positions } from "../../constants/data"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Field, FieldGroup } from "../ui/field"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { useState } from "react"
import { useEmployees } from "../../context/EmployeesContext"

export function EditEmployeeModal({employeeData}) {
  const { updateEmployee } = useEmployees();
  const [open, setOpen] = useState(false);

  const [ formData, setFormData ] = useState(employeeData);

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    updateEmployee(formData);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="default" className="cursor-pointer">
            <SquarePen/>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to employee Data here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>

            {/* name */}
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" value={formData.name} onChange={handleChange} />
            </Field>

            {/* age */}
            <Field>
              <Label htmlFor="age-1">Age</Label>
              <Input id="age-1" type="number" name="age" value={formData.age} onChange={handleChange}  />
            </Field>

            {/* department */}
            <Field>
              <Label htmlFor="department-1">Department</Label>
              <select id="department-1" name="department" value={formData.department} className="rounded-md py-1 border" onChange={handleChange} >
                {departments.map(dept=>{
                  return(
                    <option key={dept.id} value={dept.name}>{dept.name}</option>
                  )
                })}
              </select>
            </Field>

            {/* positions */}
            <Field>
              <Label htmlFor="position-1">Position</Label>
              <select id="position-1" name="position" value={formData.position} className="rounded-md py-1 border" onChange={handleChange} >
                {positions.map(pos=>{
                  return(
                    <option key={pos.id} value={pos.title}>{pos.title}</option>
                  )
                })}
              </select>
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
