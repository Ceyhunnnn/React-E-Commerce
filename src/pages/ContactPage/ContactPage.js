import React, { useState } from "react";
import "./ContactPage.css";
import { Phone, CustomMail } from "components/Icons/Icons";
import { Divider, Form, Input, Spin, notification } from "antd";
import { useTranslation } from "react-i18next";
import useForm from "hooks/useForm";
import Button from "components/Button";
import apiFunction from "services/Api";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";
function Contact() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const contactForm = useForm();
  const settingData = useSelector((state) => state.setting.value);
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
      name: "emailAddress",
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
      name: "phone",
      label: t("form.phone"),
      placeholder: t("form.phone"),
      type: "text",
      rules: [
        {
          required: true,
        },
      ],
    },
  ];
  const sendMail = () => {
    contactForm
      .validateFields()
      .then(async (val) => {
        setLoading(true);
        await apiFunction("contactMail", { type: "post", body: val }).then(
          (res) => {
            setLoading(false);
            if (res.status === 200) {
              notification.success({
                message: "Successfull",
                description: res.data.message,
              });
              contactForm.resetFields();
            }
          }
        );
      })
      .catch((err) => setLoading(false));
  };
  if (!settingData) {
    return <Loading />;
  }
  return (
    <Spin spinning={loading}>
      <div className="sized-box contact-area">
        <div className="contact-info custom-card">
          <div className="display-flex">
            <Phone />
            <p className="font-16">{t("callToUs")}</p>
          </div>
          <p className="font-14">{t("avaliableText")}</p>
          <p className="font-14">
            {t("phone")}: {settingData?.contact.phone}
          </p>
          <Divider style={{ backgroundColor: "#ccc" }} />
          <div className="display-flex ">
            <CustomMail />
            <p className="font-16">{t("writeToUs")}</p>
          </div>
          <p className="font-14">{t("hoursText")}</p>
          <p className="font-14">
            {t("emails")}: {settingData?.contact.email1}
          </p>
          <p className="font-14">
            {t("emails")}: {settingData?.contact.email2}
          </p>
        </div>
        <div className="contact-form custom-card">
          <Form form={contactForm} name="contactForm" layout="vertical">
            <div className="contact-input">
              {formItems.map((input) => (
                <Form.Item
                  key={input.id}
                  label={input.label}
                  name={input.name}
                  rules={input.rules}
                >
                  <Input
                    required
                    placeholder={input.placeholder}
                    type={input.type}
                  />
                </Form.Item>
              ))}
            </div>
            <Form.Item
              name={"message"}
              label={t("form.message")}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea
                className="contact-input"
                autoSize={{
                  minRows: 6,
                  maxRows: 6,
                }}
                placeholder={t("form.message")}
              />
            </Form.Item>
            <div className="contact-button-area">
              <Button title={t("form.titles.sendMessage")} onClick={sendMail} />
            </div>
          </Form>
        </div>
      </div>
    </Spin>
  );
}

export default Contact;
