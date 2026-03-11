function StatCard({ title, value, darkMode }) {
  return (
    <div
      style={{
        padding: "20px",
        background: darkMode ? "#1f2937" : "#ffffff",
        color: darkMode ? "white" : "black",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        width: "200px"
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          fontSize: "22px",
          fontWeight: "bold",
          marginTop: "10px"
        }}
      >
        {value}
      </p>
    </div>
  )
}

export default StatCard