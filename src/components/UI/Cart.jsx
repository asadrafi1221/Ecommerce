import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { MdEdit } from "react-icons/md"; // For edit icon
import Button from "../UI/button"; // Assuming you have a button component

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
    <div className="min-h-screen">
    <h1 className="p-5 text-[5vw] font-bold text-navy">YOUR CART</h1>

    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Cart Items */}
  <div className="col-span-2 bg-white border rounded-lg shadow p-4">
    <table className="w-full text-left">
      <thead>
        <tr className="border-b">
          <th className="py-2 text-gray-500">PRODUCT</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="py-4 flex items-start space-x-4">
            <img
              src="/Dell.jpeg"
              alt="Product"
              className="w-24 h-24 object-contain"
            />
            <div>
              <p className="text-navy font-semibold">
                Acer Aspire V5-471G Intel® Core™ i5 3rd Gen...
              </p>
              <p className="text-sm text-gray-500 mt-5">Rs 24,999</p>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  className="bg-green-500 text-white rounded-full px-2"
                  onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                >
                  -
                </button>
                <span className="px-4 border rounded">{quantity}</span>
                <button
                  className="bg-green-500 text-white rounded-full px-2"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="text-sm text-orange mt-5">Remove item</button>
            </div>
          </td>
         
        </tr>
      </tbody>
    </table>
  </div>

  {/* Cart Totals */}
  <div className="bg-white border rounded-lg shadow p-4">
    <h3 className="text-lg font-semibold mb-4 text-navy">Cart Totals</h3>
    <div className="flex justify-between mb-2 text-sm">
      <span className="text-gray-500">Subtotal</span>
      <span className="font-semibold text-navy">Rs 24,999</span>
    </div>
    <div className="flex justify-between mb-2 text-sm">
      <span className="text-gray-500">Shipping</span>
      <div className="text-right">
        <span className="font-semibold text-navy">Rs 1,500</span>
        <p className="text-xs text-gray-400">Flat rate</p>
      </div>
    </div>
    <div className="flex items-center mb-4">
      <input
        type="radio"
        name="shipping"
        className="form-radio text-orange focus:ring-orange"
      />
      <label className="ml-2 text-sm text-gray-500">Flat rate</label>
      <span className="ml-auto font-semibold text-navy">Rs 1,500</span>
    </div>
    <div className="flex justify-between text-lg font-bold mb-4">
      <span>Total</span>
      <span className="text-navy">Rs 26,499</span>
    </div>
    <button className="w-full bg-orange text-white font-bold py-3 rounded hover:bg-orange-600 transition">
      Proceed to Checkout
    </button>
  </div>

  {/* WhatsApp Button */}
  <div className="fixed bottom-4 right-4">
    <a
      href="https://wa.me/your-number"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-6 h-6" />
    </a>
  </div>
</div>
    </div>

   

     </>
  );
};

export default Cart;
