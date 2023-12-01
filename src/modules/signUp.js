import PathConstants from "PathConstants";
import { notification } from "antd";
import { setUserData } from "features/user/userSlice";
import apiFunction from "services/Api";
import TokenService from "services/TokenService";
import { store } from "./../store";
export const registerAction = async (values, registerForm) => {
  console.log("apiye istek");
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
export const getUserData = async () => {
  await apiFunction("me", { body: "", type: "get" }).then((res) => {
    if (res.status === 200) {
      store.dispatch(setUserData(res.data.data));
    }
  });
};
