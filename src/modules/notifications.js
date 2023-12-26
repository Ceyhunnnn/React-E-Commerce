import { notification } from "antd";

export const alreadyAdded = () => {
  notification.info({
    message: "Adding Products to Cart",
    description: "The product is already added to your cart",
  });
};
export const addedToCard = () => {
  notification.success({
    message: "Adding Products to Cart",
    description: "The product has been successfully added to your cart",
  });
};
