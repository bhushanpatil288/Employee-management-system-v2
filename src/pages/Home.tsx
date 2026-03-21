import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Plus, UsersRound } from "lucide-react"

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-20 flex flex-col justify-around">
        <div className="flex flex-col justify-center gap-10">
          <h1 className="text-5xl font-semibold text-start">Welcome To Employee Management System</h1>
          <p className="text-gray-500">A clean and simple Employee Management System to effortlessly add, edit, and manage employee records. Powered by seamless CRUD operations and local storage, it keeps your data always accessible—no backend needed.</p>
        </div>
        <div className="flex justify-start gap-3">
          <Link to="/add">
            <Button size={"xl"} className="cursor-pointer hover:scale-110 active:scale-95">
              <Plus />
              Start Adding Employees
            </Button>
          </Link>
          <Link to="/all">
            <Button variant={"secondary"} size={"xl"} className="cursor-pointer hover:scale-110 active:scale-95">
              <UsersRound />
              View All Employees
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center w-1/2">
        <div>
          <img src="/images/ems-home.png" alt="" className="w-full grayscale-80 drop-shadow-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Home