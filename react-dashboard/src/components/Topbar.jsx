function Topbar({ darkMode, setDarkMode }) {

  return (
    <div
      style={{
        height: "60px",
        background: darkMode ? "#1f2937" : "#ffffff",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        fontWeight: "bold",
        color: darkMode ? "white" : "black"
      }}
    >
      Admin Dashboard

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          background: "#2563eb",
          color: "white"
        }}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  )
}

export default Topbar