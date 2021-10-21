import axios from "./axios";

export function getProjectIdeas() {
  return axios.get("/project/ideas");
}

export function getProjectReport() {
  return axios.get("/project/report");
}

export function deleteProjectIdea(id) {
  return axios.delete(`/project/idea/${id}`);
}

export function deleteProjectReport(id) {
  return axios.delete(`/project/report/${id}`);
}

export function updateProject(id, data) {
  return axios.patch(`/project/${id}`, data);
}
