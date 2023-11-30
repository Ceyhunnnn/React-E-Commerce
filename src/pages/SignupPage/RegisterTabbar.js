import React from "react";
import { Form, Input } from "antd";
import Button from "components/Button";
import useForm from "hooks/useForm";
import { useTranslation } from "react-i18next";
import { registerAction } from "modules/signUp";
function Register({ setLoading }) {
  const { t } = useTranslation();
  const registerForm = useForm();
  const formItems = [
    {
      id: 0,
      name: "name",
      label: t("form.name"),
      placeholder: t("form.name"),
      type: "text",
      rules: [
        {
          required: true,
        },
      ],
    },
    {
      id: 1,
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
      id: 2,
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
  const register = () => {
    registerForm
      .validateFields()
      .then(async (values) => {
        setLoading(true);
        await registerAction(values, registerForm);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };
  return (
    <>
      <h1 className="font-36">{t("registerTitle")}</h1>
      <p className="font-14">{t("signupDesc")}</p>
      <Form
        form={registerForm}
        style={{ marginTop: "25px" }}
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
          title={t("form.titles.register")}
          width={200}
          height={45}
          onClick={register}
        />
      </div>
    </>
  );
}

export default Register;
