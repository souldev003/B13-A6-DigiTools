import React, { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductsList = ({
  productsPromise,
  cartItems,
  onToggleCart,
  onClearCart,
}) => {
  const productsData = use(productsPromise);
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="bg-[#FFFFFF] lg:py-28">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-center text-[#101727] mb-5">
              Premium Digital Tools
            </h1>
            <p className="text-center text-[#627382] mb-4">
              Choose from our curated collection of premium digital products
              designed <br /> to boost your productivity and creativity.
            </p>
          </div>

          <div className="relative bg-white border border-gray-100 rounded-full p-1 flex items-center shadow-sm w-fit overflow-hidden">
            <div
              className={`absolute top-1 bottom-1 left-1 transition-all duration-400 ease-in-out rounded-full bg-linear-to-r from-[#6130F7] to-[#9415FB] ${
                activeTab === "products"
                  ? "w-28 translate-x-0"
                  : "w-26 translate-x-29.5"
              }`}
            />

            <button
              onClick={() => setActiveTab("products")}
              className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors duration-500 ${
                activeTab === "products" ? "text-white" : "text-[#2D2665]"
              }`}
            >
              Products
            </button>

            <button
              onClick={() => setActiveTab("cart")}
              className={`relative z-10 px-6 py-2 rounded-full font-medium transition-colors duration-500 ${
                activeTab === "cart" ? "text-white" : "text-[#2D2665]"
              }`}
            >
              Cart ({cartItems.length})
            </button>
          </div>

          <div className="mt-10 w-full">
            {activeTab === "products" ? (
              <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                {productsData.map((product, i) => (
                  <ProductCard
                    key={i}
                    product={product}
                    onToggleCart={() => onToggleCart(product)}
                    isInCart={cartItems.some(
                      (item) => item.name === product.name,
                    )}
                  />
                ))}
              </div>
            ) : cartItems.length > 0 ? (
              <Cart
                cartItems={cartItems}
                onClearCart={onClearCart}
                onToggleCart={onToggleCart}
              />
            ) : (
              <div className="flex flex-col items-center  py-20">
                <AiOutlineShoppingCart className="text-gray-400 text-6xl mb-6" />
                <p className="text-gray-400 mb-4">Your cart is empty!</p>
                <button
                  onClick={() => setActiveTab("products")}
                  className="text-[#6030F7] font-semibold underline cursor-pointer"
                >
                  Browse Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
