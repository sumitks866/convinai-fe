import axios from "axios";

export const getData = async () => {
  return axios.get(`https://reqres.in/api/users`);
}