import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getStudentApi } from "../api/getStudent";
import "../css/app.css";
import { useSelector, useDispatch } from "react-redux";
import { getFetchStuData } from "../store/studentSlice";

export default function Home() {
  const [studentInfo, setStudentInfo] = useState([]);

  const [seachStr, setSeachStr] = useState([]);
  const student = useSelector((state) => state.student);
  const dispath = useDispatch();

  useEffect(() => {
    if (!student.studentList.length) {
      dispath(getFetchStuData(""));
      return;
    }

    setStudentInfo(
      student.studentList.map((item) => {
        return (
          <tr key={item.id}>
            <th>{item.name}</th>
            <th>{item.phone}</th>
            <th>{item.age}</th>
            <th>
              <NavLink to={"/detail/" + item.id} className="nav-link">
                详情
              </NavLink>
            </th>
          </tr>
        );
      })
    );
  }, [student, dispath]);

  function handleSearch() {
    getStudentApi(seachStr).then(({ data }) => {
      setStudentInfo(
        data.map((item) => {
          return (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.phone}</th>
              <th>{item.age}</th>
              <th>
                <NavLink to={"/detail/" + item.id} className="nav-link">
                  详情
                </NavLink>
              </th>
            </tr>
          );
        })
      );
      console.log(data);
    });
  }

  return (
    <div>
      <h5>学生信息</h5>
      <div className="search">
        <div className="input-group mb-3">
          <input
            value={seachStr}
            onChange={(e) => {
              setSeachStr(e.target.value);
            }}
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              onClick={handleSearch}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              搜索
            </button>
          </div>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>姓名</td>
            <td>电话</td>
            <td>年纪</td>
            <td>操作</td>
          </tr>
        </thead>

        <tbody>{studentInfo}</tbody>
      </table>
    </div>
  );
}
