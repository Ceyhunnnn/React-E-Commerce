import React from "react";
import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
function AboutCard({ name, department, path }) {
  const iconStyle = {
    fontSize: "23px",
  };
  return (
    <div className="about-card">
      <img src={path} alt="AboutPage" />
      <p className="font-24">{name}</p>
      <p className="font-14">{department}</p>
      <div className="display-flex">
        <InstagramOutlined style={iconStyle} />
        <LinkedinOutlined style={iconStyle} />
        <TwitterOutlined style={iconStyle} />
      </div>
    </div>
  );
}

export default AboutCard;
