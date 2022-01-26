import React from "react";
import { Carousel } from "react-bootstrap";
import { coursesImages } from "../../Data";

import "./CoursesCarousel.css";

const CoursesCarousel = () => {
  return (
    <div className="carousel-container mrg-auto">
      <Carousel touch={true}>
        {coursesImages.map(({ image, alt }, i) => {
          return (
            <Carousel.Item key={`carousel${i}`} interval={3000}>
              <div className="img-container mrg-auto overflow-hdn">
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`${alt} slide`}
                />
                <div className="empty-space"></div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CoursesCarousel;
