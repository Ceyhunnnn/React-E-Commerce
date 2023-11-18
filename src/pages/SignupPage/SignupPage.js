import React from "react";
import "./SignupPage.css";
import Container from "components/Container";
import RegisterTabbar from "./RegisterTabbar";
import { Tabs } from "antd";
import LoginTabbar from "./LoginTabbar";

function SignUp() {
  const tabItems = [
    {
      key: "1",
      label: "Login",
      children: <LoginTabbar />,
    },
    {
      key: "2",
      label: "Register",
      children: <RegisterTabbar />,
    },
  ];
  return (
    <Container>
      <div className="signup-area">
        <img
          className="signup-img"
          src="/images/signup.png"
          alt="SignUpPhoto"
        />
        <div className="signup">
          <Tabs centered defaultActiveKey="1" items={tabItems} />
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
