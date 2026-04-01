import React from "react";
import { FaCheck } from "react-icons/fa6";

const ProductCard = ({ product, onToggleCart, isInCart }) => {
  const tagStyles = {
    "best-seller": "bg-[#FEF3C7] text-[#D97706]",
    popular: "bg-[#E0E7FF] text-[#4F46E5]",
    new: "bg-[#DCFCE7] text-[#16A34A]",
  };

  return (
    <div className="card w-full bg-white border border-[#F3F4F6] rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
      <div className="card-body p-8 pt-10 relative">
        {product.tag && (
          <div className="absolute top-6 right-6">
            <span
              className={`text-[12px] font-bold px-3 py-1 rounded-full ${
                tagStyles[product.tagType] || "bg-gray-100"
              }`}
            >
              {product.tag}
            </span>
          </div>
        )}

        <div className="w-15 h-15 rounded-full bg-white border border-[#F3F4F6] flex items-center justify-center mb-6 shadow-sm">
          <img className="w-8" src={product.icon} alt="Icon" />
        </div>

        <h2 className="text-[22px] font-bold text-[#111827] mb-2">
          {product.name}
        </h2>

        <p className="text-[#6B7280] text-[14px] leading-[1.6] mb-6 min-h-11.25">
          {product.description}
        </p>

        <div className="flex items-baseline gap-1 mb-8">
          <span className="text-[28px] font-bold text-[#111827]">
            ${product.price}
          </span>
          <span className="text-[#9CA3AF] font-medium text-[16px]">
            /{product.period === "one-time" ? "One-Time" : "Mo"}
          </span>
        </div>

        <div className="space-y-4 mb-10 grow">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <FaCheck className="text-[#22C55E] text-[14px]" />
              <span className="text-[#4B5563] font-medium text-[15px]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="card-actions">
          <button
            onClick={onToggleCart}
            className={`btn w-full rounded-2xl border-none transition-all duration-300 ${
              isInCart
                ? "bg-[#22C55E] hover:bg-[#1eb855]"
                : "bg-[#7C3AED] hover:bg-[#6D28D9]"
            } text-white normal-case text-[16px] font-bold h-13 cursor-pointer`}
          >
            {isInCart ? `✓ Added to Cart` : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
