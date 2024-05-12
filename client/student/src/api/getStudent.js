import request from "../until/request";
export function getStudentApi(name = "", id = "") {
  return request({
    url: `/studentInfo?name=${name}&id=${id}`,
    method: "get",
  });
}

export function addStudentApi(data) {
  return request({
    url: `/studentInfo`,
    method: "post",
    data,
  });
}

export function deletStudentApi(id) {
  return request({
    url: `/studentInfo/${id}`,
    method: "delete",
  });
}

export function updateStudentApi(id, data) {
  return request({
    url: `/studentInfo/${id}`,
    method: "PATCH",
    data,
  });
}
