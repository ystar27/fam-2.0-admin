import axios from "./axios";

export function getProjectIdeas() {
  return axios.get("/project/ideas");
}

export function deleteProjectIdea(id) {
  return axios.delete(`/project/idea/${id}`);
}

export function updateProject(id, data) {
  return axios.patch(`/project/${id}`, data);
}
