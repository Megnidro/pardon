import { useState } from "react";
import { getInitials } from "../utils";
import "./UserTile.css";
import { Link } from "react-router-dom";

import { UsersTable } from "../constants";

function UserTile() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto">
      <ul className="list-group list-group-light">
        {UsersTable.map((user, index) => {
          return (
            <Link to={`/detail/${user.id}`}>
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
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default UserTile;
