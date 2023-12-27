import React from "react";

function ServiceCard({ img, text, desc }) {
  return (
    <div className="display-flex-col">
      <img src={img} alt="ServicesImages" />
      <p className="font-bold">{text}</p>
      <p className="font-14">{desc}</p>
    </div>
  );
}

export default ServiceCard;
