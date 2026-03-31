import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About />
      <GetStarted />
      <Pricing />
      <CTASection />
    </>
  );
}

export default App;
