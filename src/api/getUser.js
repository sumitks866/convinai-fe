import axios from "axios";

export const getUser = async (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
}