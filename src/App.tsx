import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmployeesProvider } from "./context/EmployeesContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import AddEmployees from "./pages/AddEmployees";
const App = () => {
  return (
    <ThemeContextProvider>
      <EmployeesProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element=<Home /> />
              <Route path="/add" element=<AddEmployees /> />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EmployeesProvider>
    </ThemeContextProvider>
  )
}

export default App