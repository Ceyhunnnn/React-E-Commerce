import React, { useState } from "react";
import "./AccountPage.css";
import { useTranslation } from "react-i18next";
import { Divider, Form, Input, Upload, notification } from "antd";
import useForm from "hooks/useForm";
import Button from "components/Button";
import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import apiFunction from "services/Api";
import { getUserData } from "modules/signUp";

function AccountPage() {
  const user = useSelector((state) => state.user.value);
  const { t } = useTranslation();
  const form = useForm();
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
          message: "The input is required",
        },
      ],
    },
    {
      id: 1,
      name: "lastName",
      label: t("form.lastName"),
      placeholder: t("form.lastName"),
      type: "text",
      rules: [],
    },
    {
      id: 2,
      name: "email",
      label: t("form.email"),
      placeholder: t("form.email"),
      type: "text",
      disabled: true,
      rules: [],
    },
    {
      id: 3,
      name: "phone",
      label: t("form.phone"),
      placeholder: t("form.phone"),
      type: "text",
      rules: [],
    },
    {
      id: 4,
      name: "address",
      label: t("form.address"),
      placeholder: t("form.address"),
      type: "text",
      rules: [],
    },
    {
      id: 5,
      name: "currentPassword",
      label: "Current Password (During production)",
      placeholder: "During production",
      disabled: true,
      rules: [],
    },
    {
      id: 6,
      name: "newPassword",
      label: "New Password (During production)",
      placeholder: "During production",
      disabled: true,
      rules: [],
    },
    {
      id: 7,
      name: "confirmNewPassword",
      label: "Confirm New Password (During production)",
      placeholder: "During production",
      disabled: true,
      rules: [],
    },
  ];
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        console.log(info.file);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  useEffect(() => {
    form.setFieldsValue({
      name: user?.name,
      email: user?.email,
      lastName: user?.lastName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const submitPersonForm = () => {
    form.validateFields().then((val) => {
      apiFunction(`/upload-profile/${user._id}`, {
        type: "patch",
        body: val,
      }).then(async (res) => {
        if (res.status === 200) {
          await getUserData();
          notification.success({
            message: "Successfull",
            description: res.data.message,
          });
        }
      });
    });
  };
  return (
    <>
      <div className="form-area">
        <h1 className="edit-title">Edit Your Profile</h1>
        <Divider />
        <div className="photo-area">
          {imageUrl ? (
            <div>
              <img
                src={imageUrl}
                alt="avatar"
                className="upload-photo"
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
              <DeleteOutlined
                onClick={() => setImageUrl(null)}
                className="delete-button"
              />
            </div>
          ) : (
            <Upload
              accept="image/png, image/jpeg"
              name="avatar"
              listType="picture-circle"
              showUploadList={false}
              onChange={handleChange}
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            >
              {uploadButton}
            </Upload>
          )}
        </div>
        {user && (
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
                  rules={input.rules}
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
        )}
      </div>
    </>
  );
}

export default AccountPage;
