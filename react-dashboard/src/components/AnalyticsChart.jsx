import { useOutletContext } from "react-router-dom"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4000 },
  { name: "May", revenue: 6000 },
  { name: "Jun", revenue: 7000 }
]

function AnalyticsChart() {

  const { darkMode } = useOutletContext()

  return (
    <div
      style={{
        marginTop: "40px",
        background: darkMode ? "#1f2937" : "white",
        color: darkMode ? "white" : "black",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h3>Revenue Analytics</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="name"
            stroke={darkMode ? "white" : "black"}
          />

          <YAxis
            stroke={darkMode ? "white" : "black"}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AnalyticsChart