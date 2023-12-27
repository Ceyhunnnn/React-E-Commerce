import React from "react";
import "./AboutPage.css";
import { useTranslation } from "react-i18next";
import AboutCard from "./components/Card";
import ServiceCard from "./components/ServiceCard";
import { useSelector } from "react-redux";
import Loading from "components/Loading/Loading";

function About() {
  const settingData = useSelector((state) => state.setting.value);
  const { t } = useTranslation();
  if (!settingData) {
    return <Loading />;
  }
  return (
    <>
      <div className="about-area">
        <div className="about">
          <p className="font-36 about-text">{t("ourStory")}</p>
          <p className="about-text">{settingData.about?.description}</p>
        </div>
        <div className="flex-area">
          <img
            className="about-img"
            src="/images/aboutpage.png"
            alt="AboutPhoto"
          />
        </div>
      </div>
      <div className="about-card-area sized-box">
        {settingData.about?.managerList?.map((person) => (
          <AboutCard
            key={person.id}
            name={person.name}
            department={person.title}
            path={person.image}
          />
        ))}
      </div>
      <hr></hr>
      <div className="about-card-area sized-box">
        {settingData.about?.serviceList?.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.image}
            text={service.title}
            desc={service.subTitle}
          />
        ))}
      </div>
    </>
  );
}

export default About;
