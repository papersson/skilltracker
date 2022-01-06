import axios from "axios";
const baseUrl = "/api/items";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getFatigue = () => {
    const request = axios.get(`/fatigue`)
    return request.then((response) => response.data);
}
const updateFatigue = (newValue) => {
  const request = axios.put(`/fatigue`, {value: newValue});
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default {
  getAll,
  getFatigue,
  updateFatigue,
  create,
  update,
  remove
};
