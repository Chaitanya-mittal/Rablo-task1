import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useEmployeeContext } from "../../context/EmployeProvider";
import Card from "../Card/Card";
import BackButton from "../BackButton/BackButton";
import styles from "./EmployeeItem.module.css";
function EmployeItem() {
  const { id } = useParams();
  const { handleSelectEmployee, selectedEmployee } = useEmployeeContext();
  useEffect(() => {
    if (id) {
      handleSelectEmployee(Number(id));
    }
  }, [id, handleSelectEmployee]);

  if (!selectedEmployee) {
    return <Navigate to="/" />;
  }
  return (
    <section className={styles.itemsection}>
      <BackButton />
      <div className={styles.box}>
        <div className={styles.imgbox}>Image come here</div>
        <Card info={selectedEmployee} />
      </div>
    </section>
  );
}

export default EmployeItem;
