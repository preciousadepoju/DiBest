import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Footer from "./pages/Footer";
import PlatformVendor from "./pages/PlatformVendor";
import WhatsAppButton from "./components/WhatsappButton";
import { useState } from "react";
import Form from "./components/Form/Form";


function App() {
  const [shhow,setShhow] = useState(false)
  const getShow = (show) => {
    console.log(show);
  setShhow(show)
}

  return (
    <>
      {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/platform" element={<PlatformVendor />} />
      </Routes> */}
      <Navbar getShow={getShow} />
      <Home />
      <Features />
      <Pricing />
      <About />
      <PlatformVendor />
      <WhatsAppButton />
      <Footer />
      <Form shhow={shhow} />
    </>
  );
}

export default App;

