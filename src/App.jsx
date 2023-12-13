import EmployeProvider from "./context/EmployeProvider";
import EmployeeItem from "./components/EmployeeItem/EmployeeItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
function App() {
  return (
    <EmployeProvider>
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="employee/:id" element={<EmployeeItem />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </EmployeProvider>
  );
}

export default App;
