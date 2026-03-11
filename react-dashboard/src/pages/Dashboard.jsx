import StatCard from "../components/StatCard"
import AnalyticsChart from "../components/AnalyticsChart"
import UsersTable from "../components/UsersTable"
import { useOutletContext } from "react-router-dom"



function Dashboard() {

  const { darkMode } = useOutletContext()
    
  return (
    <div style={{ display: "flex" }}>

      <div style={{ width: "100%" }}>

        <div style={{ padding: "20px" }}>

          <h1>Dashboard</h1>
          <p>Welcome to your admin panel.</p>

          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <StatCard title="Users" value="1,245" darkMode={darkMode} />
            <StatCard title="Revenue" value="$12,430" darkMode={darkMode} />
            <StatCard title="Orders" value="324" darkMode={darkMode} />
            <StatCard title="Visitors" value="8,921" darkMode={darkMode} />
          </div>

          <AnalyticsChart />

          <UsersTable />

        </div>

      </div>

    </div>
  )
}

export default Dashboard