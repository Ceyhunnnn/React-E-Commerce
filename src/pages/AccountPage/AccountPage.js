import React, { useState } from "react";
import "./AccountPage.css";
import { useTranslation } from "react-i18next";
import { Divider, Form, Input, Popconfirm, Spin, notification } from "antd";
import useForm from "hooks/useForm";
import Button from "components/Button";
import { DeleteOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import apiFunction from "services/Api";
import { getUserData } from "modules/signUp";
import axios from "axios";
import Loading from "components/Loading/Loading";
import { Upload } from "components/Icons/Icons";
import PathConstants from "PathConstants";
import TokenService from "services/TokenService";

function AccountPage() {
  const [loading, setLoading] = useState(false);
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

  const uploadProfilePHoto = async (event) => {
    setLoading(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("profile", file);
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}profilePhoto/${user?._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          getUserData();
          notification.success({
            message: "Successfull",
            description: res.data.message,
          });
          setLoading(false);
        }
      });
  };
  const deleteProfilPhoto = async () => {
    const regexPattern = /\/profile\/(profile_\d+\.(jpeg|png))/;
    const match = user.image.match(regexPattern);
    const dynamicPart = match[1];
    const body = {
      image: dynamicPart,
    };
    setLoading(true);
    await apiFunction(`profilePhoto/${user._id}`, {
      body,
      type: "delete",
    }).then(async (res) => {
      if (res.status === 200) {
        await getUserData();
        notification.success({
          message: "Successfull",
          description: res.data.message,
        });
        setLoading(false);
      }
    });
  };
  const updateUserData = () => {
    setLoading(true);
    form
      .validateFields()
      .then((values) => {
        apiFunction(`/upload-profile/${user._id}`, {
          type: "patch",
          body: values,
        }).then(async (res) => {
          if (res.status === 200) {
            await getUserData();
            notification.success({
              message: "Successfull",
              description: res.data.message,
            });
            setLoading(false);
          }
        });
      })
      .catch(() => setLoading(false));
  };
  const deleteAccount = async () => {
    const body = {
      id: user._id,
    };
    await apiFunction("deleteAccount", { body, type: "delete" }).then((res) => {
      if (res?.data?.message) {
        TokenService.deleteToken();
        return window.location.replace(PathConstants.HOME);
      }
    });
  };
  useEffect(() => {
    form.setFieldsValue({
      name: user?.name,
      email: user?.email,
      lastName: user?.lastName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!user) {
    return <Loading />;
  }
  return (
    <Spin spinning={loading}>
      <div className="form-area">
        <h1 className="edit-title">Edit Your Profile</h1>
        <Divider />
        <div className="photo-area">
          {user?.image ? (
            <div>
              <img
                src={user?.image}
                alt="profilePhoto"
                className="upload-photo"
              />
              <Popconfirm
                title="Delete Photo"
                description="Are you sure to delete this photo?"
                onConfirm={deleteProfilPhoto}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined className="delete-button" />
              </Popconfirm>
            </div>
          ) : (
            <div className="upload-area">
              <Upload className="upload-button" />
              <p className="upload-title">Upload your profile photo</p>
              <input
                accept="image/*"
                type="file"
                className="upload-input"
                onChange={uploadProfilePHoto}
              />
            </div>
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
              <Popconfirm
                title="Delete Profile"
                description="Are you sure to delete this account"
                onConfirm={deleteAccount}
                okText="Yes"
                cancelText="No"
              >
                <Button title={t("deleteAccount")} height="40px" />
              </Popconfirm>
              <Popconfirm
                title="Update Profile"
                description="Are you sure to update this form"
                onConfirm={updateUserData}
                okText="Yes"
                cancelText="No"
              >
                <Button title={t("saveChanges")} height="40px" />
              </Popconfirm>
            </div>
          </Form>
        )}
      </div>
    </Spin>
  );
}

export default AccountPage;
