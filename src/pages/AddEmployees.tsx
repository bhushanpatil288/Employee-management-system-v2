import { departments, positions } from "../constants/data"
import { Button } from "../components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "../components/ui/field"
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { useEmployees } from "../context/EmployeesContext";



const formSchema = z.object({
  name: z
    .string()
    .min(5, "Name should be at least 5 characters")
    .max(60, "Max 60 characters"),
  age: z
    .number({ message: "Age is required" })
    .min(18, "Age should be at least 18")
    .max(60, "Age should be at most 60"),
  department: z.string().min(1, "Please select a department"),
  position: z.string().min(1, "Please select a position"),
})

const AddEmployees = () => {
  const { setEmployees } = useEmployees();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: undefined,
      department: "",
      position: "",
    },
  })

  const { reset } = form

  function onSubmit(data: z.infer<typeof formSchema>) {
    // setEmployees([...employees, {...data, id: Date.now()}]);
    setEmployees((prev :[])=> [...prev, {...data, id: Date.now()}])
    console.log("Form submitted:", data)
    reset()
  }

  return (
    <div className="flex justify-center my-40">
      <div className="w-full max-w-md p-5 shadow-md border rounded">
        <form className="py-5 px-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Add a New Employee</FieldLegend>
              <FieldDescription>
                Fill the following form to add a new employee
              </FieldDescription>

              <FieldGroup>
                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    placeholder="ex. John Doe"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <FieldDescription className="text-red-500">
                      {form.formState.errors.name.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Age */}
                <Field>
                  <FieldLabel htmlFor="age">Age</FieldLabel>
                  <Input
                    id="age"
                    type="number"
                    min={18}
                    max={60}
                    placeholder="ex. 34"
                    {...form.register("age", { valueAsNumber: true })}
                  />
                  {form.formState.errors.age && (
                    <FieldDescription className="text-red-500">
                      {form.formState.errors.age.message}
                    </FieldDescription>
                  )}
                  <FieldDescription>
                    Age should be between 18 and 60
                  </FieldDescription>
                </Field>

                <FieldSeparator />

                <div className="grid grid-cols-2 gap-4">
                  {/* Department */}
                  <Field>
                    <FieldLabel htmlFor="department">Department</FieldLabel>
                    <Controller
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id="department">
                            <SelectValue placeholder="Select a Department">
                              {field.value ? field.value.toUpperCase() : null}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {departments.map((dept) => (
                                <SelectItem key={dept.id} value={dept.name}>
                                  {dept.name.toUpperCase()}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {form.formState.errors.department && (
                      <FieldDescription className="text-red-500">
                        {form.formState.errors.department.message}
                      </FieldDescription>
                    )}
                  </Field>

                  {/* Position */}
                  <Field>
                    <FieldLabel htmlFor="position">Position</FieldLabel>
                    <Controller
                      control={form.control}
                      name="position"
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger id="position">
                            <SelectValue placeholder="Select a Position">
                              {field.value ? field.value.toUpperCase() : null}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {positions.map((pos) => (
                                <SelectItem key={pos.id} value={pos.title}>
                                  {pos.title.toUpperCase()}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {form.formState.errors.position && (
                      <FieldDescription className="text-red-500">
                        {form.formState.errors.position.message}
                      </FieldDescription>
                    )}
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            <Field orientation="horizontal">
              <Button type="submit" className="cursor-pointer">
                Submit
              </Button>
              <Button variant="outline" type="button" className="cursor-pointer">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  )
}

export default AddEmployees