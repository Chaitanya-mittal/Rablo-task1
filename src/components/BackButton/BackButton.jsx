import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <button className="btn" onClick={handleBack}>
      {" "}
      &larr; Back
    </button>
  );
}

export default BackButton;
