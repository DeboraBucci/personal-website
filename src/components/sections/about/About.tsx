import Header from "../../UI/Header";
import Vignettes from "./Vignettes";
import Traits from "./Traits";
import Others from "./Others";

import ProgrammingLanguages from "./Technologies";
import Languages from "./Languages";

const About = () => {
  return (
    <section className="section-about" id="about">
      <Header section="about" className="portfolio-heading" />
      <Vignettes />
      <Traits />
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <ProgrammingLanguages />
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <Others />
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <Languages />
    </section>
  );
};

export default About;
