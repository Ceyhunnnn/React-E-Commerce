import React from "react";
import "./ContactPage.css";
import Container from "components/Container";
import { Phone, CustomMail } from "components/Icons/Icons";
import { Divider, Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import useForm from "hooks/useForm";
import Button from "components/Button";
function Contact() {
  const { t } = useTranslation();
  const contactForm = useForm();
  const formItems = [
    {
      id: 0,
      name: "name",
      label: t("form.name"),
      placeholder: t("form.name"),
      type: "text",
    },
    {
      id: 1,
      name: "mail",
      label: t("form.email"),
      placeholder: t("form.email"),
      type: "text",
    },
    {
      id: 2,
      name: "phone",
      label: t("form.phone"),
      placeholder: t("form.phone"),
      type: "text",
    },
  ];
  return (
    <Container>
      <div className="sized-box contact-area">
        <div className="contact-info custom-card">
          <div className="display-flex">
            <Phone />
            <p className="font-16">{t("callToUs")}</p>
          </div>
          <p className="font-14">{t("avaliableText")}</p>
          <p className="font-14">{t("phone")}: +8801611112222</p>
          <Divider style={{ backgroundColor: "#ccc" }} />
          <div className="display-flex ">
            <CustomMail />
            <p className="font-16">{t("writeToUs")}</p>
          </div>
          <p className="font-14">{t("hoursText")}</p>
          <p className="font-14">{t("emails")}: customer@exclusive.com</p>
          <p className="font-14">{t("emails")}: support@exclusive.com</p>
        </div>
        <div className="contact-form custom-card">
          <Form form={contactForm} name="contactForm" layout="vertical">
            <div className="contact-input">
              {formItems.map((input) => (
                <Form.Item
                  key={input.id}
                  label={input.label}
                  name={input.name}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
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
                allowClear
              />
            </Form.Item>
            <div className="contact-button-area">
              <Button title={t("form.titles.sendMessage")} />
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
