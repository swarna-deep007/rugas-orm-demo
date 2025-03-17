import React from "react";

const checkOut = {
  _id: "12321",
  createdAt: new Date().toLocaleDateString(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "Jacket",
      color: "blue",
      size: "S",
      price: 120,
      quantity: 1,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAddress: {
    address: "123 Fashion Street",
    city: "New York",
    country: "USA",
  },
};

const OrderConfirmationPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-6">
        Thank you for your Order!
      </h1>
      <p className="text-center text-gray-700">
        Your order has been successfully placed.
      </p>

      <div className="mt-6 p-4 border border-gray-300 rounded-md">
        <h2 className="text-xl font-semibold">Order Details</h2>
        <p className="text-gray-700">Order ID: {checkOut._id}</p>
        <p className="text-gray-700">Order Date: {checkOut.createdAt}</p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div className="p-4 border border-gray-300 rounded-md">
          <p className="text-gray-700">{checkOut.shippingAddress.address}</p>
          <p className="text-gray-700">
            {checkOut.shippingAddress.city}, {checkOut.shippingAddress.country}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Items Ordered</h2>
        <div className="space-y-4">
          {checkOut.checkoutItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center border-b pb-4 border-gray-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600">
                  Color: {item.color} | Size: {item.size}
                </p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                <p className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">
          Total Amount: $
          {checkOut.checkoutItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </p>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-md">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
