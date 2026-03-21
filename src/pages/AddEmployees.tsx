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
import { Input } from "../components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

const AddEmployees = () => {
  const departments = [
    { id: 1, name: "Engineering" },
    { id: 2, name: "Human Resources" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Finance" },
    { id: 5, name: "Customer Support" }
  ];

  const positions = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "HR Manager" },
    { id: 3, title: "Marketing Specialist" },
    { id: 4, title: "Financial Analyst" },
    { id: 5, title: "Support Executive" }
  ];
  return (
    <div className="flex justify-center my-50 ">
      <div className="w-full max-w-md p-5 shadow-md border rounded">
        <form className="py-5 px-3">
          <FieldGroup>

            <FieldSet>
              <FieldLegend>Add a New Employee</FieldLegend>
              <FieldDescription>
                Fill the following form to add a new employee
              </FieldDescription>

              <FieldGroup>

                {/* Name */}
                <Field>
                  <FieldLabel htmlFor="name">
                    Name
                  </FieldLabel>
                  <Input
                    id="name"
                    placeholder="ex. John Doe"
                    required
                  />
                </Field>

                {/* Age */}
                <Field>
                  <FieldLabel htmlFor="age">
                    Age
                  </FieldLabel>
                  <Input
                    id="age"
                    placeholder="ex. 34"
                    required
                  />
                  <FieldDescription>
                    Age should be greater than 18 and less than 60
                  </FieldDescription>
                </Field>

                <FieldSeparator />

                <div className="grid grid-cols-2 gap-4">
                {/* Department */}                  
                  <Field>
                    <FieldLabel htmlFor="department">
                      Department
                    </FieldLabel>
                    <Select defaultValue="" name="department">
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select a Department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {departments.map((dept) => {
                            return (
                              <SelectItem key={dept.id} value={dept.name}>{(dept.name).toUpperCase()}</SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>

                {/* Position */}
                  <Field>
                    <FieldLabel htmlFor="position">
                      position
                    </FieldLabel>
                    <Select defaultValue="" name="position">
                      <SelectTrigger id="position">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {positions.map((pos) => {
                            return (
                              <SelectItem key={pos.id} value={pos.title}>{(pos.title).toUpperCase()}</SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

              </FieldGroup>

            </FieldSet>

            <Field orientation="horizontal">
              <Button type="submit" className="cursor-pointer">Submit</Button>
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