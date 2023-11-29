//import logo from "./logo.svg";
//import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./NewStyle.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import WebApp from "./components/WebApp";
import CMS from "./components/CMS";
import CustomWebApp from "./components/CustomWebApp";
import HireUs from "./components/HireUs";
import MobileApp from "./components/MobileApp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="services" element={<Services />}></Route>
        <Route path="web-app" element={<WebApp />}></Route>
        <Route path="cms-readymade" element={<CMS />}></Route>
        <Route path="custom-web-app" element={<CustomWebApp />}></Route>
        <Route path="hire-us" element={<HireUs />}></Route>
        <Route path="mobile-app" element={<MobileApp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
