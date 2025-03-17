import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 220,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 340, // Ensure this is correctly calculated
};

const Checkout = () => {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutId(Date.now()); // Use a unique timestamp as checkout ID
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment successful:", details);
    alert("Payment Successful! Redirecting...");
    navigate("/order-confirmation");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section - Shipping and Payment */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg font-medium mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded bg-gray-100"
              disabled
            />
          </div>

          <h3 className="text-lg font-medium mb-4">Delivery Address</h3>
          {Object.keys(shippingAddress).map((field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 capitalize">{field.replace("postalCode", "Pin Code").replace("firstName", "First Name").replace("lastName", "Last Name").replace("phone", "Phone Number").replace("city", "City").replace("country", "Country")}</label>
              <input
                type="text"
                value={shippingAddress[field]}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, [field]: e.target.value })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          ))}

          <div className="mt-6">
            {!checkoutId ? (
              <button type="submit" className="w-full bg-black text-white py-3 rounded hover:bg-gray-800">
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg font-medium mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={cart.totalPrice} // Ensure correct amount
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment failed. Try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      
      {/* Right Section - Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4 space-y-4">
          {cart.products.map((product, index) => (
            <div key={index} className="flex items-start justify-between py-2 border-b">
              <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 rounded-md" />
              <div className="flex-1">
                <h3 className="text-md font-medium">{product.name}</h3>
                <p className="text-gray-500">Size: {product.size}</p>
                <p className="text-gray-500">Color: {product.color}</p>
              </div>
              <p className="text-xl font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between font-semibold text-xl border-t pt-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
            <p>
                Total
            </p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
