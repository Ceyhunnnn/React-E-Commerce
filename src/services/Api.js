import { notification } from "antd";
import axiosClient from "./Axios";

export const apiFunction = async (url, props) => {
  const { type, body, message = true } = props || "";
  try {
    const response = await axiosClient.request({
      url,
      method: type || "get",
      data: body,
    });
    return response;
  } catch (error) {
    if (message) {
      notification.error({
        message: "Error",
        description: error.response.data.message,
      });
    }
  }
};
export default apiFunction;
