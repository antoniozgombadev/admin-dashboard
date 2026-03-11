import Sidebar from "../components/Sidebar"
import UsersTable from "../components/UsersTable"

function Users() {
  return (
    <div style={{ display: "flex" }}>

      <div style={{ padding: "20px", width: "100%" }}>
        <h1>Users</h1>

        <UsersTable />
      </div>

    </div>
  )
}

export default Users