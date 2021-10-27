import axios from "axios";

const apiURL = "http://127.0.0.1:4000";

export const api = axios.create({
  baseURL: apiURL,
});
