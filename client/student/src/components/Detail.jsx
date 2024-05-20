import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentApi, deletStudentApi } from "../api/getStudent";
import { useNavigate } from "react-router-dom";
import "../css/detail.css";
import { deleteStuData } from "../store/studentSlice";
import { useDispatch } from "react-redux";

export default function Detail() {
  const routerParam = useParams();
  let [studentInfo, setStudentInfo] = useState([]);
  const dispatch = useDispatch();
  const strMap = new Map([
    ["name", "姓名"],
    ["age", "年纪"],
    ["phone", "电话"],
    ["email", "邮箱"],
    ["degree", "学历"],
    ["school", "学校"],
    ["profession", "专业"],
    ["brefInfo", "简介"],
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    getStudentApi(undefined, routerParam.id).then(({ data }) => {
      setStudentInfo(
        Object.entries(data[0]).map(([key, val]) => {
          if (key === "id") return null;
          return (
            <tr className="row">
              <td>{strMap.get(key)}</td>
              <td>{val}</td>
            </tr>
          );
        })
      );
    });
    console.log("===>", routerParam);
  }, [routerParam]);

  function handleDelet() {
    if (window.confirm("是否删除")) {
      dispatch(deleteStuData(routerParam.id));
      navigate("/home", {
        state: {
          type: "success",
          message: "删除成功",
        },
      });
      // deletStudentApi(routerParam.id).then((res) => {

      // });
    }
  }

  function handdleEdit() {
    navigate("/AddOrEdit", {
      state: {
        id: routerParam.id,
      },
    });
  }

  return (
    <div>
      <div className="opter-button">
        <button className="btn btn-info" onClick={handdleEdit}>
          编辑
        </button>{" "}
        <button className="btn btn-danger" onClick={handleDelet}>
          删除
        </button>
      </div>
      <div>
        <table className="table-striped table">
          <tbody>{studentInfo}</tbody>
        </table>
      </div>
    </div>
  );
}
