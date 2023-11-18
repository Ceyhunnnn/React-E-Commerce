import React from "react";
import { Form, Input } from "antd";
import Button from "components/Button";
import useForm from "hooks/useForm";
function Login() {
  const form = useForm();
  const formItems = [
    {
      id: 0,
      name: "email",
      label: "Email Address",
      placeholder: "Email Address",
      type: "text",
    },
    {
      id: 1,
      name: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
  ];
  return (
    <>
      <h1 className="font-36">Log in to Exclusive</h1>
      <p className="font-14">Enter your details below</p>
      <Form
        style={{ marginTop: "25px" }}
        form={form}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name="registerForm"
        layout="vertical"
      >
        {formItems.map((input) => (
          <Form.Item
            key={input.id}
            name={input.name}
            label={input.label}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder={input.placeholder} type={input.type} />
          </Form.Item>
        ))}
      </Form>
      <div className="flex-area">
        <Button title="Login" width={200} height={45} />
      </div>
    </>
  );
}

export default Login;
