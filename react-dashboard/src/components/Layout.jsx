import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

function Layout() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: darkMode ? "#111827" : "#f3f4f6",
        color: darkMode ? "white" : "black"
      }}
    >
      <Sidebar darkMode={darkMode} />

      <div style={{ flex: 1 }}>

        <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div style={{ padding: "20px", width: "100%" }}>
          <Outlet context={{ darkMode }} />
        </div>

      </div>
    </div>
  )
}

export default Layout