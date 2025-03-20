import { TUserWrite } from "../models/user";
import apiClient from "./ApiClient";

class UserService {
  async getUser(userId: number) {
    const { data } = await apiClient.get(`/user/${userId}`);
    return data;
  }
  async createUser(payload: TUserWrite) {
    const { data } = await apiClient.post("/user", payload);
    return data;
  }
  async editUserDetails(userId: number, payload: TUserWrite) {
    const { data } = await apiClient.post(`/user/${userId}`, payload);
    return data;
  }
}

export default new UserService();
