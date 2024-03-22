import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./types.ts";
import UserTile from "./components/UserTile.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetails from "./views/UserDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserTile />,
  },
  {
    path: "/detail/:id",
    element: <UserDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
