import { Link } from "react-router-dom"

function Sidebar({ darkMode }) {
  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        background: darkMode ? "#111827" : "#0f172a",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Admin Panel</h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Dashboard
        </Link>

        <Link to="/users" style={{ color: "white", textDecoration: "none" }}>
          Users
        </Link>

        <Link to="/analytics" style={{ color: "white", textDecoration: "none" }}>
          Analytics
        </Link>

        <Link to="/settings" style={{ color: "white", textDecoration: "none" }}>
          Settings
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar