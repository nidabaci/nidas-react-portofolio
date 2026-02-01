import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Favicon from "react-favicon";
import Wordpress from "../src/pages/Wordpress";
import FrontendPage from "./pages/FrontendPage";

export const App = () => {
  return (
    <Router>
      <Favicon url="https://cdn-icons-png.flaticon.com/512/3498/3498215.png" />
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<FrontendPage />} />
        <Route path="/Wordpress-Portofolio" element={<Wordpress />} />
      </Routes>

      <Footer />
    </Router>
  );
};
