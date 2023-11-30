import PathConstants from "PathConstants";
import { notification } from "antd";
import apiFunction from "services/Api";
import TokenService from "services/TokenService";

export const registerAction = async (values, registerForm) => {
  await apiFunction("register", { body: values, type: "post" }).then((res) => {
    if (res.data.success) {
      notification.success({
        message: "Successfull!",
        description: res.data.message,
      });
      if (registerForm) registerForm.resetFields();
    }
  });
};
export const loginAction = async (values) => {
  await apiFunction("login", {
    body: values,
    type: "post",
  }).then((res) => {
    if (res.data.success) {
      TokenService.setToken(res.data.token);
      return window.location.replace(PathConstants.HOME);
    }
  });
};
export const logout = () => {
  TokenService.deleteToken();
  return window.location.replace(PathConstants.HOME);
};
