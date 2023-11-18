import React from "react";
import "./index.css";
import Container from "components/Container";
import Register from "./Register";
import { Tabs } from "antd";
import Login from "./Login";

function SignUp() {
  const tabItems = [
    {
      key: "1",
      label: "Login",
      children: <Login />,
    },
    {
      key: "2",
      label: "Register",
      children: <Register />,
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
