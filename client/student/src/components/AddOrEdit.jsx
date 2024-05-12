import React, { useState, useEffect } from "react";
import {
  addStudentApi,
  getStudentApi,
  updateStudentApi,
} from "../api/getStudent.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function AddAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!location.state) return;
    getStudentApi(undefined, location.state.id).then(({ data }) => {
      setStudentInfo(data[0]);
    });
  }, [location]);
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    degree: "小学",
    school: "",
    profession: "",
    brefInfo: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (Object.values(studentInfo).some((val) => !val)) {
      window.confirm("请填写完整");
      return;
    }

    if (location?.state?.id) {
      updateStudentApi(location?.state?.id, studentInfo).then(() => {
        navigate("/home", {
          state: { type: "success", message: "编辑成功！" },
        });
      });
    } else {
      addStudentApi(studentInfo).then(() => {
        navigate("/home", {
          state: { type: "success", message: "添加成功！" },
        });
      });
    }
  }

  function handleChange(e) {
    console.log(e.target);
    const tmpStudentInfo = { ...studentInfo };
    tmpStudentInfo[e.target.id] = e.target.value.trim();
    setStudentInfo(tmpStudentInfo);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input
            type="text"
            value={studentInfo.name}
            onChange={handleChange}
            className="form-control"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">年龄</label>
          <input
            type="text"
            value={studentInfo.age}
            onChange={handleChange}
            className="form-control"
            id="age"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">电话</label>
          <input
            type="text"
            onChange={handleChange}
            value={studentInfo.phone}
            className="form-control"
            id="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">邮箱</label>
          <input
            value={studentInfo.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="degree">学历</label>
          <select
            className="form-control"
            id="degree"
            value={studentInfo.degree}
            onChange={handleChange}
          >
            <option>小学</option>
            <option>高中</option>
            <option>大学</option>
            <option>硕士</option>
            <option>博士</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="school">毕业学校</label>
          <input
            type="text"
            className="form-control"
            id="school"
            onChange={handleChange}
            value={studentInfo.school}
          />
        </div>
        <div className="form-group">
          <label htmlFor="profession">职业</label>
          <input
            type="text"
            className="form-control"
            id="profession"
            onChange={handleChange}
            value={studentInfo.profession}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brefInfo">个人简介</label>
          <textarea
            className="form-control"
            id="brefInfo"
            rows="3"
            onChange={handleChange}
            value={studentInfo.brefInfo}
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-2">
            确认添加
          </button>
        </div>
      </form>
    </div>
  );
}
