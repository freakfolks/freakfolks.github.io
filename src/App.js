import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Talks from "./Component/Talks";
import Pages from "./Component/Pages";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Youth from "./Component/Youth";
import Lifestyle from "./Component/Lifestyle";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/talks" element={<Talks />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Youth" element={<Youth />}></Route>
        <Route path="/Lifestyle" element={<Lifestyle />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
