import {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";

const employeeContext = createContext();

function EmployeProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [searchedEmployee, setSearchedEmployee] = useState(-1);
  const [isSelectbtn, setSelectbtn] = useState(false);

  const markedEmployees = useRef([]);

  useEffect(() => {
    async function fetchEmployeData() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("http://localhost:5001/employeeDetail");
        const fetchedData = await res.json();
        if (fetchEmployeData.status === "failure") {
          throw new Error("Error while fetching data");
        }
        setData(fetchedData.data);
      } catch (error) {
        setError("Something Went Wrong");
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchEmployeData();
  }, []);

  useEffect(() => {
    EmptyMarkedEmployees();
  }, [isSelectbtn]);

  function handleSelectEmployee(id) {
    const result = data.filter((e) => e.id === id);
    console.log(result[0]);
    setSelectedEmployee(result[0]);
  }

  function handleSearchReset() {
    setSearchedEmployee(-1);
  }

  function handleDeleteEmployee(id) {
    if (id === searchedEmployee) {
      setSearchedEmployee(0);
    }
    setData((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  }
  function handleSearchEmployee(id) {
    if (id === 0) setSearchedEmployee(-1);
    else {
      const res = data.filter((d) => d.id === id);
      if (res.length === 0) {
        setSearchedEmployee(0);
      } else setSearchedEmployee(id);
    }
  }

  function handleCheckMark(id, isChecked) {
    console.log(id, isChecked);
    if (isChecked) {
      CheckMark(id);
    } else {
      UncheckMark(id);
    }
  }

  function CheckMark(id) {
    markedEmployees.current = [...markedEmployees.current, id];
  }

  function UncheckMark(id) {
    markedEmployees.current = markedEmployees.current.filter((p) => p !== id);
  }

  function DeleteAllMarked() {
    const x = data.filter((p) => !markedEmployees.current.includes(p.id));
    setData(x);
    EmptyMarkedEmployees();
  }

  function EmptyMarkedEmployees() {
    markedEmployees.current = [];
  }

  return (
    <employeeContext.Provider
      value={{
        data,
        isLoading,
        error,
        handleDeleteEmployee,
        handleSearchEmployee,
        searchedEmployee,
        selectedEmployee,
        handleSelectEmployee,
        handleSearchReset,
        isSelectbtn,
        setSelectbtn,
        DeleteAllMarked,
        handleCheckMark,
      }}
    >
      {children}
    </employeeContext.Provider>
  );
}

export function useEmployeeContext() {
  const x = useContext(employeeContext);
  if (x === undefined) {
    return new Error("Out of bound usage");
  }
  return x;
}

export default EmployeProvider;
