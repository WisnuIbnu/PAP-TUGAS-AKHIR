import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VechicleModels from "./pages/VechicleModels";
import AboutUs from "./pages/AboutUs";
import Team from "./pages/Team";
import Testimonials from "./pages/TestimonialClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<VechicleModels />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/teams" element={<Team />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
