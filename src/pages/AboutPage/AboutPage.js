import React from "react";
import "./AboutPage.css";
import { useTranslation } from "react-i18next";
import AboutCard from "./component/Card";
import ServiceCard from "./component/ServiceCard";

function About() {
  const { t } = useTranslation();
  const aboutPersonInfo = [
    {
      id: 0,
      name: "Tom Cruise",
      department: "Founder & Chairman",
      imgPath: "/images/aboutPerson1.png",
    },
    {
      id: 1,
      name: "Emma Watson",
      department: "Managing Director",
      imgPath: "/images/aboutPerson2.png",
    },
    {
      id: 2,
      name: "Will Smith",
      department: "Product Designer",
      imgPath: "/images/aboutPerson3.png",
    },
  ];
  const services = [
    {
      id: 0,
      text: "FREE AND FAST DELIVERY",
      desc: "Free delivery for all orders over $140",
      img: "/images/services.png",
    },
    {
      id: 1,
      text: "24/7 CUSTOMER SERVICE",
      desc: "Friendly 24/7 customer support",
      img: "/images/servicesPhone.png",
    },
    {
      id: 2,
      text: "MONEY BACK GUARANTEE",
      desc: "We reurn money within 30 days",
      img: "/images/servicesSafe.png",
    },
  ];
  return (
    <>
      <div className="about-area">
        <div className="about">
          <p className="font-36 about-text">{t("ourStory")}</p>
          <p className="about-text">{t("aboutDesc")}</p>
          <p className="about-text">{t("aboutDesc2")}</p>
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
        {aboutPersonInfo.map((person) => (
          <AboutCard
            key={person.id}
            name={person.name}
            department={person.department}
            path={person.imgPath}
          />
        ))}
      </div>
      <hr></hr>
      <div className="about-card-area sized-box">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            text={service.text}
            desc={service.desc}
          />
        ))}
      </div>
    </>
  );
}

export default About;
