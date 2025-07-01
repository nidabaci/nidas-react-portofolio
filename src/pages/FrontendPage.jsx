import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Portofolio from "../components/portofolio/Portofolio";
import Services from "../components/services/Services";
import Testimonial from "../components/testimonial/Testimonial";

const FrontendPage = () => {
  return (
    <div>
      <About />
      <Experience />
      <Portofolio />
      <Services />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default FrontendPage;
