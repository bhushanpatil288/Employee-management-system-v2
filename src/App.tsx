import { BrowserRouter, Routes, Route } from "react-router-dom"
import { EmployeesProvider } from "./context/EmployeesContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
const App = () => {
  return (
    <ThemeContextProvider>
      <EmployeesProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element=<Home /> />
            </Routes>
          </Layout>
        </BrowserRouter>
      </EmployeesProvider>
    </ThemeContextProvider>
  )
}

export default App