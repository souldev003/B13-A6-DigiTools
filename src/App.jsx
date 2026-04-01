import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProductsList from "./components/Products/ProductsList";
import { Suspense, useState } from "react";

const getProducts = async () => {
  const res = await fetch("/productsData.json");
  return res.json();
};
const productsPromise = getProducts();
function App() {
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = (product) => {
    setCartItems((prev) =>
      prev.find((item) => item.name === product.name)
        ? prev.filter((item) => item.name !== product.name)
        : [...prev, product],
    );
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Hero></Hero>
      <About />
      <Suspense
        fallback={
          <div className="text-center my-9 bg-[#FFFFFF]">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        }
      >
        <ProductsList
          productsPromise={productsPromise}
          cartItems={cartItems}
          onToggleCart={toggleCart}
        />
      </Suspense>
      <GetStarted />
      <Pricing />
      <CTASection />
      <Footer />
    </>
  );
}

export default App;
