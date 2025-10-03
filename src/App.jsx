import { Routes, Route } from "react-router-dom";
import Header from "./conponents/Header/Header";
import Footer from "./conponents/footer/footer";
import Home from "./conponents/home/home";
import About from "./conponents/about/about";
import Contact from "./conponents/contact_us/contact_us";
import PageNotFound from "./conponents/pageNotFound/PageNotFound";
import Product from "./conponents/product/product";
import P_details from "./conponents/product/P_details";
import Developer from "./conponents/developers/developer";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about/:developer" element={<Developer />} />
        <Route path="/product/:id" element={<P_details />} />
        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
