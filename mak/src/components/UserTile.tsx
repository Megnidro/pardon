import { useState } from "react";
import { getInitials } from "../utils";
import "./UserTile.css";

function UserTile() {
  const UsersTable: any[] = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      role: "admin",
    },
    {
      id: 2,
      name: "Alice",
      email: "alice@example.com",
      role: "user",
    },
    {
      id: 3,
      name: "Bob",
      email: "bob@example.com",
      role: "user",
    },
    {
      id: 4,
      name: "Emma",
      email: "emma@example.com",
      role: "user",
    },
    {
      id: 5,
      name: "Charlie",
      email: "charlie@example.com",
      role: "user",
    },
    {
      id: 6,
      name: "David",
      email: "david@example.com",
      role: "user",
    },
    {
      id: 7,
      name: "Eva",
      email: "eva@example.com",
      role: "user",
    },
    {
      id: 8,
      name: "Frank",
      email: "frank@example.com",
      role: "user",
    },
    {
      id: 9,
      name: "Grace",
      email: "grace@example.com",
      role: "user",
    },
    {
      id: 10,
      name: "Henry",
      email: "henry@example.com",
      role: "user",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <ul className="list-group list-group-light">
        {UsersTable.map((user, index) => {
          return (
            <li
              key={user.id}
              onClick={(event) => {
                setSelectedIndex(index);
              }}
              className={
                selectedIndex === index
                  ? "active list-group-item d-flex justify-content-between align-items-center my-1 px-2"
                  : "list-group-item d-flex justify-content-between align-items-center my-1 px-2"
              }
            >
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  className="rounded-circle avatar"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{user.name}</p>
                  <p className="text-muted mb-0">{user.email}</p>
                </div>
              </div>
              <span className="badge rounded-pill badge-success">Active</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserTile;
