import { useLocation } from "react-router-dom";
export default function Header({ onBtnAdd, showAdd }) {
  //style={{ backgroundColor: "green" }}
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <h1>Task Traker App</h1>
        {location.pathname === '/' && <button
          className="btn"
          style={{ backgroundColor: "green" }}
          onClick={onBtnAdd}
        >
          {showAdd ? "Close" : "Add"}
        </button>}
      </header>
    </div>
  );
}
