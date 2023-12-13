import { useState } from "react";
import styles from "./Navbar.module.css";
import { useEmployeeContext } from "../../context/EmployeProvider";
function Navbar() {
  const [empId, setempId] = useState(0);
  const {
    handleSearchEmployee,
    handleSearchReset,
    setSelectbtn,
    isSelectbtn,
    DeleteAllMarked,
  } = useEmployeeContext();
  function handleSearch() {
    console.log();
    handleSearchEmployee(empId);
  }
  function onChangeId(e) {
    setempId(Number(e.target.value));
  }
  function handleReset() {
    handleSearchReset();
    setempId(0);
  }

  function handleMark() {
    setSelectbtn((prev) => !prev);
  }

  function handleDeleteAllMarked() {
    DeleteAllMarked();
    setSelectbtn(false);
  }

  return (
    <section id="navbar-section">
      <nav className={styles.nav}>
        <input
          type="tel"
          value={empId}
          placeholder="Enter Employee Id"
          onChange={(e) => onChangeId(e)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Back To List</button>
        <button onClick={handleMark}>{isSelectbtn ? "Done" : "Select"}</button>
        {isSelectbtn && (
          <button onClick={handleDeleteAllMarked} className="btn">
            Delete All
          </button>
        )}
      </nav>
    </section>
  );
}

export default Navbar;
