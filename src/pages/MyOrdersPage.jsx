import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const mockOrders = [
                {
                    _id: "12345",
                    createdAt: new Date(),
                    shippingAddress: { city: "New York", country: "USA" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: "https://picsum.photos/500/500?random=1"
                        }
                    ],
                    totalPrice: 100,
                    isPaid: true
                },
                {
                    _id: "34567",
                    createdAt: new Date(),
                    shippingAddress: { city: "Los Angeles", country: "USA" },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: "https://picsum.photos/500/500?random=2"
                        }
                    ],
                    totalPrice: 150,
                    isPaid: false
                }
            ];
            setOrders(mockOrders);
        }, 1000);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <h2 className="text-lg sm:text-2xl font-bold mb-6">My Orders</h2>

            {/* Responsive Table Container */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="w-full text-sm sm:text-base text-gray-700">
                    {/* Table Header */}
                    <thead className="bg-gray-100 text-xs sm:text-sm uppercase">
                        <tr className="text-left">
                            <th className="py-3 px-4">Image</th>
                            <th className="py-3 px-4">Order ID</th>
                            <th className="py-3 px-4">Created</th>
                            <th className="py-3 px-4">Shipping Address</th>
                            <th className="py-3 px-4">Items</th>
                            <th className="py-3 px-4">Price</th>
                            <th className="py-3 px-4">Status</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200">
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="py-4 px-4 text-center text-gray-500">
                                    You have no orders
                                </td>
                            </tr>
                        ) : (
                            orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50">
                                    {/* Product Image */}
                                    <td className="py-3 px-4">
                                        <img
                                            src={order.orderItems[0]?.image || ""}
                                            alt={order.orderItems[0]?.name || "Product Image"}
                                            className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                                        />
                                    </td>

                                    {/* Order ID */}
                                    <td className="py-3 px-4 font-medium text-gray-900">#{order._id}</td>

                                    {/* Order Date */}
                                    <td className="py-3 px-4 whitespace-nowrap">
                                        {new Date(order.createdAt).toLocaleDateString()}{" "}
                                        {new Date(order.createdAt).toLocaleTimeString()}
                                    </td>

                                    {/* Shipping Address */}
                                    <td className="py-3 px-4 text-gray-600">
                                        {order.shippingAddress
                                            ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                                            : "N/A"}
                                    </td>

                                    {/* Total Items */}
                                    <td className="py-3 px-4 text-center">{order.orderItems.length}</td>

                                    {/* Price */}
                                    <td className="py-3 px-4 font-semibold text-right">₹{order.totalPrice}</td>

                                    {/*payment Status*/}
                                    <td className="py-2 px-2 sm:py-4 sm:px-4">
                                        <span className={`${order.isPaid ? "bg-green-100 text-green-700":"bg-red-100 text-red-700"} px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}>{order.isPaid?"Paid":"Pending"}</span>
                                    </td>
                                </tr>

                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrdersPage;
