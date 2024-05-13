import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import AddOrEdit from "../components/AddOrEdit.jsx";
import Detail from "../components/Detail.jsx";
import AboutEmail from "../components/AboutEmail.jsx";
import AboutPhone from "../components/AboutPhone.jsx";

export default function HomeRouter() {
  return useRoutes([
    { path: "/home", element: <Home /> },
    {
      path: "/about",
      element: <About />,
      children: [
        { path: "email", element: <AboutEmail /> },
        { path: "phone", element: <AboutPhone /> },
        { path: "", element: <Navigate to="email" replace={true} /> },
      ],
    },
    { path: "/AddOrEdit", element: <AddOrEdit /> },
    { path: "/", element: <Navigate to="/home" replace={true} /> },
    { path: "/detail/:id", element: <Detail /> },
  ]);
}
