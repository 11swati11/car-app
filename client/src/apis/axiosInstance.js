import axios from "axios";

const ROOT_URL = "http://localhost:3001/";

export default axios.create({
  baseURL: ROOT_URL
});
