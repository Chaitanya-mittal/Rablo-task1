import styles from "./EmployeeList.module.css";
import { useEmployeeContext } from "../../context/EmployeProvider";
import Card from "../Card/Card";

function EmployeeList() {
  const { data, searchedEmployee, handleDeleteEmployee, isSelectbtn } =
    useEmployeeContext();
  function handleDelete(id) {
    handleDeleteEmployee(id);
  }
  return (
    <ul className={styles.employeeList}>
      {searchedEmployee === -1 &&
        data.map((d) => {
          return (
            <li key={d.id}>
              <Card info={d} />
              {!isSelectbtn && (
                <button
                  className={styles.deletebtn}
                  onClick={() => handleDelete(d.id)}
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}

      {searchedEmployee === 0 && <h3>No Employee with such id</h3>}

      {searchedEmployee > 0 &&
        data.map((d) => {
          return (
            d.id === searchedEmployee && (
              <li key={d.id}>
                <Card info={d} />
                {!isSelectbtn && (
                  <button
                    className={styles.deletebtn}
                    onClick={() => handleDelete(d.id)}
                  >
                    Delete
                  </button>
                )}
              </li>
            )
          );
        })}
    </ul>
  );
}

export default EmployeeList;
