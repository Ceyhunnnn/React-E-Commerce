import React from "react";
import "./AccountPage.css";
import Container from "components/Container";
import { useTranslation } from "react-i18next";
import { Divider, Form, Input } from "antd";
import useForm from "hooks/useForm";
import Button from "components/Button";
function AccountPage() {
  const { t } = useTranslation();
  const form = useForm();
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
      name: "lastName",
      label: t("form.lastName"),
      placeholder: t("form.lastName"),
      type: "text",
    },
    {
      id: 2,
      name: "mail",
      label: t("form.email"),
      placeholder: t("form.email"),
      type: "text",
    },
    {
      id: 3,
      name: "phone",
      label: t("form.phone"),
      placeholder: t("form.phone"),
      type: "text",
    },
    {
      id: 4,
      name: "address",
      label: t("form.address"),
      placeholder: t("form.address"),
      type: "text",
    },
    {
      id: 5,
      name: "currentPassword",
      label: "Current Password (During production)",
      placeholder: "During production",
      disabled: true,
    },
    {
      id: 6,
      name: "newPassword",
      label: "New Password (During production)",
      placeholder: "During production",
      disabled: true,
    },
    {
      id: 7,
      name: "confirmNewPassword",
      label: "Confirm New Password (During production)",
      placeholder: "During production",
      disabled: true,
    },
  ];
  const submitPersonForm = () => {};
  return (
    <Container>
      <div class="form-area">
        <div>
          <h1 className="edit-title">Edit Your Profile</h1>
          <Divider />
          <Form
            form={form}
            className="form-item-area"
            name="personForm"
            layout="vertical"
            style={{
              maxWidth: 800,
            }}
          >
            <div className="form-grid">
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
                    disabled={input.disabled}
                    placeholder={input.placeholder}
                    type={input.type}
                  />
                </Form.Item>
              ))}
            </div>
            <div className="button-area-end">
              <Button
                title={t("saveChanges")}
                height="40px"
                onClick={submitPersonForm}
              />
            </div>
          </Form>
        </div>
      </div>
    </Container>
  );
}

export default AccountPage;
