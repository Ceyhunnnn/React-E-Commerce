import React from "react";
import { Result } from "antd";
function OrderModalContent({ user }) {
  return (
    <Result
      status="success"
      title="Your order has been completed successfully"
      subTitle={`Your order details will be sent to your e-mail address. (${user?.email})`}
      extra={[]}
    />
  );
}

export default OrderModalContent;
