import React from "react";
import "./CategoryProductPage.css";
import { useLocation } from "react-router-dom";
function CategoryProductPage() {
  const path = useLocation();

  return <div>{JSON.stringify(path.pathname.split("/")[2])}</div>;
}

export default CategoryProductPage;
