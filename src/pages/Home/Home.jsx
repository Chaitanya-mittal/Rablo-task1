import { Link } from "react-router-dom";
import styles from "./Home.module.css";
function Home() {
  return (
    <main className={styles.main}>
      <h1>Home</h1>
      <Link to="/employee" className="btn">
        Go to Employee list
      </Link>
    </main>
  );
}

export default Home;
