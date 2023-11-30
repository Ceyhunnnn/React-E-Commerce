import React from "react";
import { Form, Input } from "antd";
import Button from "components/Button";
import useForm from "hooks/useForm";
import { useTranslation } from "react-i18next";
import { loginAction } from "modules/signUp";
function Login({ setLoading }) {
  const { t } = useTranslation();
  const loginForm = useForm();
  const formItems = [
    {
      id: 0,
      name: "email",
      label: t("form.email"),
      placeholder: t("form.email"),
      type: "text",
      rules: [
        {
          required: true,
          type: "email",
          message: "The input is not valid E-mail!",
        },
      ],
    },
    {
      id: 1,
      name: "password",
      label: t("form.password"),
      placeholder: t("form.password"),
      type: "password",
      rules: [
        {
          required: true,
        },
      ],
    },
  ];
  const login = () => {
    loginForm
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        await loginAction(values);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };
  return (
    <>
      <h1 className="font-36">{t("loginTitle")}</h1>
      <p className="font-14">{t("signupDesc")}</p>
      <Form
        style={{ marginTop: "25px" }}
        form={loginForm}
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
            rules={input.rules}
          >
            <Input placeholder={input.placeholder} type={input.type} />
          </Form.Item>
        ))}
      </Form>
      <div className="flex-area">
        <Button
          title={t("form.titles.login")}
          width={200}
          height={45}
          onClick={login}
        />
      </div>
    </>
  );
}

export default Login;
