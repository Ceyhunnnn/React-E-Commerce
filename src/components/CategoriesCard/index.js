import React from "react";
import "./index.css";
function CategoriesCard({ path, name }) {
  return (
    <div className="cat-card">
      <img src={path} alt="CategoriesPhotos" />
      <p>{name}</p>
    </div>
  );
}

export default CategoriesCard;
