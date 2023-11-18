import React from "react";
import { Form, Input } from "antd";
import Button from "components/Button";
import useForm from "hooks/useForm";
function Register() {
  const form = useForm();
  return (
    <>
      <h1 className="font-36">Create an account</h1>
      <p className="font-14">Enter your details below</p>
      <Form
        form={form}
        style={{ marginTop: "25px" }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        name="registerForm"
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Email Address" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
      </Form>
      <div className="flex-area">
        <Button title="Create Account" width={200} height={45} />
      </div>
    </>
  );
}

export default Register;
