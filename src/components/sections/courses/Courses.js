import React from "react";
import { Carousel } from "react-bootstrap";

import Header from "../../UI/Header";

import { coursesImages } from "../../../database/data";

const Courses = () => {
  return (
    <section className="section-courses" id="courses">
      <Header section="courses" />
      <Carousel touch={true} className="carousel">
        {coursesImages.map(({ image, alt }, i) => (
          <Carousel.Item key={`carousel${i}`} interval={2000}>
            <div className="carousel__box">
              <img
                className="carousel__img"
                width={900}
                height={669}
                src={image}
                alt={`${alt} course's certificate`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Courses;
