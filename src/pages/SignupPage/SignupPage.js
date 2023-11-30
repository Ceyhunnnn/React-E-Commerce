import React, { useState } from "react";
import "./SignupPage.css";
import RegisterTabbar from "./RegisterTabbar";
import { Spin, Tabs } from "antd";
import LoginTabbar from "./LoginTabbar";

function SignUp() {
  const [loading, setLoading] = useState(false);
  const tabItems = [
    {
      key: "1",
      label: "Login",
      children: <LoginTabbar setLoading={setLoading} />,
    },
    {
      key: "2",
      label: "Register",
      children: <RegisterTabbar setLoading={setLoading} />,
    },
  ];
  return (
    <>
      <div className="signup-area">
        <img
          className="signup-img"
          src="/images/signup.png"
          alt="SignUpPhoto"
        />
        <div className="signup">
          <Spin spinning={loading}>
            <Tabs centered defaultActiveKey="1" items={tabItems} />
          </Spin>
        </div>
      </div>
    </>
  );
}

export default SignUp;
