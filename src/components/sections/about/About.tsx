import Header from "../../UI/Header";
import Traits from "./Traits";
import Technologies from "./Technologies";
import Languages from "./Languages";

import { about } from "../../../database/languages-text";
import { mainTechnologies, otherTechnologies, programmingLanguages } from "../../../database/data";


const About = () => {
  console.log(about.titles.mainTechnologies);

  return (
    <section className="section-about" id="about">
      <Header section="about" className="portfolio-heading" />
      
      <Traits />
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <Technologies title={about.titles.programmingLanguages} technologiesList={programmingLanguages} className="technologies technologies--shape-left technologies--image-one"/>
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <Technologies title={about.titles.mainTechnologies} technologiesList={mainTechnologies} className="technologies technologies--shape-right technologies--image-two"/>
      <div className="thin-line thin-line--small" data-aos="fade-up"></div>
      <Languages />
    </section>
  );
};

export default About;
