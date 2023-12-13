import BackButton from "../../components/BackButton/BackButton";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import Navbar from "../../components/Navbar/Navbar";

function EmployeePage() {
  return (
    <section id="employee-list-section">
      <BackButton />
      <Navbar />
      <EmployeeList />
    </section>
  );
}

export default EmployeePage;
