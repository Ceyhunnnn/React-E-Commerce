/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./CategoryProductPage.css";
import { useLocation } from "react-router-dom";
import { Button, Row, Select } from "antd";
import ShoppingCard from "components/ShoppingCard";
import apiFunction from "services/Api";
import Loading from "components/Loading/Loading";
import PathConstants from "PathConstants";

function CategoryProductPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHiddenMore, setIsHiddenMore] = useState("block");
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
  const isAllProductRouteName =
    path.pathname === "/" + PathConstants.ALL_PRODUCTS;
  useEffect(() => {
    if (path?.state?.id !== undefined) {
      const body = {
        id: path?.state?.id,
      };
      window.scrollTo(0, 0);
      apiFunction("getProducts", { body, type: "post" }).then((res) => {
        if (res.data.success) setData(res.data.data);
      });
    } else if (isAllProductRouteName) {
      const body = {
        page: currentPage,
      };
      apiFunction("allProducts", { body, type: "post" }).then((res) => {
        let oldProductArray = data;
        let lastProdcutArray = res.data.data;
        if (res.data.data.length <= 3) {
          setIsHiddenMore("none");
        }
        if (res.status === 200) {
          if (!data) {
            setData(res.data.data);
          } else {
            const prodcutArray = oldProductArray.concat(lastProdcutArray);
            setData(prodcutArray);
          }
        }
      });
    } else {
      return window.location.replace(PathConstants.HOME);
    }
  }, [currentPage]);
  if (!data) {
    return <Loading />;
  }
  return (
    <>
      <div className="category-title">
        <h1>{path?.state?.title || "All Prodcuts"}</h1>
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
            id={prod._id}
            name={prod.name}
            cover_photo={prod.cover_photo}
            price={prod.price}
          />
        ))}
      </div>
      {isAllProductRouteName && (
        <Row justify="center">
          <Button
            className="more-prod"
            style={{ margin: "10px 0px", display: `${isHiddenMore}` }}
            onClick={() => setCurrentPage((prevState) => prevState + 1)}
          >
            More Product
          </Button>
        </Row>
      )}
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
