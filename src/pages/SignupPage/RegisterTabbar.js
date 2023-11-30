import React from "react";
import { Form, Input, notification } from "antd";
import Button from "components/Button";
import useForm from "hooks/useForm";
import { useTranslation } from "react-i18next";
import apiFunction from "services/Api";
function Register() {
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
        apiFunction("register", { body: values, type: "post" })
          .then((res) => {
            if (res) {
              notification.success({
                message: "Successfull!",
                description: res.data.message,
              });
              registerForm.resetFields();
            }
          })
          .catch((err) => null);
      })
      .catch((err) => null);
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
