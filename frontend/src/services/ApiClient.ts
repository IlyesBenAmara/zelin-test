import { Axios } from "axios";

const apiClient = new Axios({
  baseURL: import.meta.env.BASE_URL,
});

export default apiClient;
