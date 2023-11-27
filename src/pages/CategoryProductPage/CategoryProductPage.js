import React from "react";
import "./CategoryProductPage.css";
import { useLocation } from "react-router-dom";
import { Button, Select } from "antd";
import ShoppingCard from "components/ShoppingCard";

function CategoryProductPage() {
  const path = useLocation();
  console.log(JSON.stringify(path.pathname.split("/")[2]));
  const orderSelectList = [
    {
      value: "top seller",
      label: "top seller",
    },
    {
      value: "from cheap to expensive",
      label: "from cheap to expensive",
    },
    {
      value: "from expensive to cheap",
      label: "from expensive to cheap",
    },
  ];
  const title = path.pathname.split("/")[2];
  return (
    <>
      <div className="category-title">
        <h1>{title[0].toUpperCase() + title.slice(1)}</h1>
        <Select
          defaultValue="top-seller"
          style={{
            width: 150,
          }}
          options={orderSelectList}
        />
      </div>
      <div className="shopping-area">
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
        <ShoppingCard />
      </div>
      <div className="flex-area" style={{ margin: "30px 0px" }}>
        <Button>More</Button>
      </div>
    </>
  );
}

export default CategoryProductPage;
