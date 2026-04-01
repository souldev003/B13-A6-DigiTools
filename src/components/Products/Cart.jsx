import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItems, onToggleCart, onClearCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleClick = () => {
    toast.success(`Successfully Purchased`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("hello");

    onClearCart();
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#111827] mb-6">Your Cart</h2>

      <div className="space-y-4 mb-8">
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-gray-100">
                <img src={item.icon} alt={item.name} className="w-8" />
              </div>
              <div>
                <h3 className="font-bold text-[#111827]">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onToggleCart(item)}
              className="text-red-500 hover:text-red-700 font-medium text-sm transition-colors cursor-pointer"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center py-4 border-t border-gray-100 mb-6">
        <span className="text-gray-500 font-medium">Total:</span>
        <span className="text-3xl font-bold text-[#111827]">${totalPrice}</span>
      </div>

      <button
        onClick={() => handleClick()}
        className="w-full py-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-purple-200 active:scale-95 cursor-pointer"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
