import { useOutletContext } from "react-router-dom"
import { useState } from "react"

function UsersTable() {

  const [users, setUsers] = useState([
    { name: "John Doe", email: "john@email.com", role: "Admin", status: "Active" },
    { name: "Anna Smith", email: "anna@email.com", role: "User", status: "Active" },
    { name: "Mark Lee", email: "mark@email.com", role: "User", status: "Inactive" },
  ])

  const [search, setSearch] = useState("")
  const [editingUser, setEditingUser] = useState(null)

  const [showAddModal, setShowAddModal] = useState(false)

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "User",
    status: "Active"
  })

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index)
    setUsers(updatedUsers)
  }

  const handleEdit = (user) => {
    setEditingUser(user)
  }

  const handleSave = () => {
    const updatedUsers = users.map((user) =>
      user.email === editingUser.email ? editingUser : user
    )

    setUsers(updatedUsers)
    setEditingUser(null)
  }

  const handleAddUser = () => {
    setUsers([...users, newUser])

    setNewUser({
      name: "",
      email: "",
      role: "User",
      status: "Active"
    })

    setShowAddModal(false)
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  const { darkMode } = useOutletContext()
  return (
    <div className="table" style={{ background: darkMode ? "#1f2937" : "white",color: darkMode ? "white" : "black", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
      
      <h3>Users</h3>

      <button
        onClick={() => setShowAddModal(true)}
        style={{
          marginBottom: "15px",
          padding: "8px 12px",
          borderRadius: "6px",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        + Add User
      </button>

      <br/>

        <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
            padding: "10px",
            marginBottom: "15px",
            width: "260px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            outline: "none",
            fontSize: "14px"
        }}
        />

      <table
        width="100%"
        style={{
            borderCollapse: "collapse",
            fontSize: "14px"
        }}
      >
        <thead>
          <tr>
            <th align="left">Name</th>
            <th align="left">Email</th>
            <th align="left">Role</th>
            <th align="left">Status</th>
            <th align="left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: "10px 0" }}>{user.name}</td>
              <td style={{ padding: "10px 0" }}>{user.email}</td>
              <td style={{ padding: "10px 0" }}>{user.role}</td>

              <td style={{ padding: "10px 0" }}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: user.status === "Active" ? "#dcfce7" : "#fee2e2",
                    color: user.status === "Active" ? "#166534" : "#991b1b",
                    fontWeight: "600",
                    fontSize: "12px"
                  }}
                >
                  {user.status}
                </span>
              </td>

              <td style={{ padding: "10px 0" }}>
                <button
                    onClick={() => handleEdit(user)}
                    style={{
                        marginRight: "8px",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #e5e7eb",
                        background: "white",
                        cursor: "pointer"
                    }}
                    >
                    Edit
                </button>

                <button
                    onClick={() => handleDelete(index)}
                    style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#ef4444",
                        color: "white",
                        cursor: "pointer"
                    }}
                    >
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EDIT MODAL */}

      {editingUser && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
                background: darkMode ? "#111827" : "white",
                color: darkMode ? "white" : "black",
                padding: "20px",
                borderRadius: "10px",
                width: "320px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
            }}
            >
            <h3>Edit User</h3>

            <input
              type="text"
              value={editingUser.name}
              onChange={(e) =>
                setEditingUser({ ...editingUser, name: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
                boxSizing: "border-box"
                }}
            />

            <input
              type="email"
              value={editingUser.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser, email: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
                boxSizing: "border-box"
                }}
            />

            <button
              onClick={() => setEditingUser(null)}
              style={{ marginRight: "10px" }}
            >
              Close
            </button>

            <button onClick={handleSave}>
              Save
            </button>

          </div>
        </div>
      )}

      {/* ADD USER MODAL */}

      {showAddModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              background: darkMode ? "#111827" : "white",
              color: darkMode ? "white" : "black",
              padding: "20px",
              borderRadius: "10px",
              width: "300px"
            }}
          >
            <h3>Add User</h3>

            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) =>
                setNewUser({ ...newUser, name: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
                boxSizing: "border-box"
                }}
            />

            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              style={{
                width: "100%",
                marginBottom: "10px",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                background: darkMode ? "#1f2937" : "white",
                color: darkMode ? "white" : "black",
                boxSizing: "border-box"
                }}
            />

            <button
              onClick={() => setShowAddModal(false)}
              style={{ marginRight: "10px" }}
            >
              Cancel
            </button>

            <button onClick={handleAddUser}>
              Add
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default UsersTable