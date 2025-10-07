import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slice/cartSlice";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [dispatch, navigate, checkout]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-3xl mx-auto mb-5 p-8 bg-white shadow-md rounded-lg border mt-10">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Thank You for Your Order!
      </h1>

      {checkout && (
        <div>
          {/* Order Header */}
          <div className="flex justify-between mb-8 border-b pb-4">
            <div>
              <h2 className="text-lg font-medium text-gray-700">
                Order ID: {checkout._id}
              </h2>
              <p className="text-sm text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-600">
                Estimated Delivery:
              </p>
              <p className="text-sm text-gray-700">
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-10">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Ordered Items
            </h3>
            {checkout.checkoutItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between border-b py-3"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md border"
                  />
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.color} | {item.size}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-gray-800 font-medium">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment & Delivery Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t pt-6">
            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Payment
              </h4>
              <p className="text-gray-600">{checkout.paymentMethod}</p>
              <p className="text-sm text-gray-500 capitalize">
                Status: {checkout.paymentStatus}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Shipping Address
              </h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
              <p className="text-gray-600">
                Postal Code: {checkout.shippingAddress.postalCode}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmationPage;
