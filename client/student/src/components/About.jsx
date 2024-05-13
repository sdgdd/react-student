import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      这是一个学生管理系统
      <div>
        <NavLink to="email">邮箱</NavLink>
        <NavLink to="phone">电话</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
