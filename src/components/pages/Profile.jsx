import React, { useState } from "react";
import { FaTrashAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing the required icons

// Dummy Data for Orders and Purchased Items with Images
const initialOrders = [
  {
    orderId: "#12345",
    date: "2024-12-05",
    totalAmount: "Rs 50,000",
    items: [
      { name: "Acer Aspire V5", price: "Rs 24,999", image: "Dell.jpeg" },
      { name: "Wireless Mouse", price: "Rs 1,500", image: "Dell.jpeg" },
    ],
  },
  {
    orderId: "#12346",
    date: "2024-12-01",
    totalAmount: "Rs 10,000",
    items: [
      { name: "Smartphone XYZ", price: "Rs 9,500", image: "Dell.jpeg" },
      { name: "Screen Protector", price: "Rs 500", image: "Dell.jpeg" },
    ],
  },
];

const Profile = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [currentIndex, setCurrentIndex] = useState(0); // For slider functionality

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

  // Slider Controls
  const handleNext = () => {
    if (currentIndex < orders.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first slide
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(orders.length - 1); // Loop to the last slide
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-gray-800 p-8">
      {/* Profile Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-400 flex items-center justify-center text-white text-3xl font-bold">
            A
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-navy">Alex Johnson</h1>
            <p className="text-gray-600 text-sm md:text-base">Email: alex.johnson@example.com</p>
            <p className="text-gray-600 text-sm md:text-base">Location: Sindh, Pakistan</p>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">Your Orders</h2>

        {orders.length === 0 ? (
          <p className="text-gray-600">You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.orderId} className="border-b py-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-medium text-sm md:text-base">{order.orderId}</p>
                <p className="text-gray-600 text-sm md:text-base">{order.date}</p>
              </div>
              <div>
                <p className="text-gray-800 font-semibold text-sm md:text-base">Total: {order.totalAmount}</p>
                <div className="mt-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-gray-600 mb-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-contain rounded-md"
                      />
                      <div className="flex justify-between w-full">
                        <p className="text-sm md:text-base">{item.name}</p>
                        <p className="text-sm md:text-base">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="text-red-600 hover:text-navy transition-colors duration-300 mt-2"
                  onClick={() => handleDeleteOrder(order.orderId)} // Delete Order
                >
                  <FaTrashAlt className="text-xl" /> {/* Trash Icon */}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Product Slider Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-4xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-navy mb-4">Featured Products</h2>

        <div className="relative">
          {/* Slider Controls */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange text-white rounded-full p-4 md:p-6"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {orders.map((order, idx) => (
                <div key={idx} className="w-full flex-shrink-0 p-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-md mb-4"
                      />
                      <span className="text-gray-800 font-semibold text-sm md:text-base">{item.name}</span>
                      <span className="text-gray-600 text-sm md:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange text-white rounded-full p-4 md:p-6"
          >
            <FaArrowRight className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
