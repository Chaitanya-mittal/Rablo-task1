import { useEmployeeContext } from "../../context/EmployeProvider";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Card({ info }) {
  const {
    id,
    employee_name: name,
    employee_age: age,
    employee_salary: salary,
  } = info;
  const [isChecked, setIsChecked] = useState(false);
  const { isSelectbtn, handleCheckMark } = useEmployeeContext();

  function handleCheck(e) {
    setIsChecked(e.target.checked);

    handleCheckMark(id, e.target.checked);
  }

  return (
    <fieldset className={styles.cardFieldset}>
      <legend className={styles.cardLegend}>
        {isSelectbtn && <input type="checkbox" onChange={handleCheck} />}
        <h3>{id}</h3>
      </legend>

      <div className={styles.card}>
        <Link to={`${id}`} className={styles.cardInfo}>
          <div>
            <h6>Name</h6>
            <p>{name}</p>
          </div>
          <div>
            <h6>Age</h6>
            <p>{age} years</p>
          </div>
          <div>
            <h6>Salary</h6>
            <p>&#8377; {salary}</p>
          </div>
        </Link>
      </div>
    </fieldset>
  );
}

export default Card;
