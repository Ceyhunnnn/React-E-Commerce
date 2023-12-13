/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./CategoryProductPage.css";
import { useLocation } from "react-router-dom";
import { Select } from "antd";
import ShoppingCard from "components/ShoppingCard";
import apiFunction from "services/Api";
import Loading from "components/Loading/Loading";

function CategoryProductPage() {
  const [data, setData] = useState();
  const path = useLocation();
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
  useEffect(() => {
    const body = {
      id: path.state.id,
    };
    apiFunction("getProducts", { body, type: "post" }).then((res) => {
      if (res.data.success) setData(res.data.data);
    });
  }, []);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="category-title">
        <h1>{path.state.title}</h1>
        <Select
          defaultValue="top-seller"
          style={{
            width: 150,
          }}
          options={orderSelectList}
        />
      </div>
      <div className="shopping-area">
        {data?.map((prod) => (
          <ShoppingCard
            key={prod._id}
            name={prod.name}
            cover_photo={prod.cover_photo}
            price={prod.price}
          />
        ))}
      </div>
      {data.length === 0 && (
        <div className="progress-area">
          <h2 className="font-36">{title} Products Loading</h2>
          <img src="/images/progress.svg" alt="Progress" />
        </div>
      )}
    </>
  );
}

export default CategoryProductPage;
