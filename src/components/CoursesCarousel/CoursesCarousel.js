import React from "react";
import { Carousel } from "react-bootstrap";
import Course01 from "../../imgs/certifications/course-01.jpg";
import Course02 from "../../imgs/certifications/course-02.jpg";
import Course03 from "../../imgs/certifications/course-03.jpg";
import Course04 from "../../imgs/certifications/course-04.jpg";
import Course05 from "../../imgs/certifications/course-05.png";

import "./CoursesCarousel.css";

const CoursesCarousel = () => {
  const coursesImages = [
    {
      image: Course01,
      alt: "First",
      interval: 1000,
    },
    {
      image: Course02,
      alt: "Second",
    },
    {
      image: Course03,
      alt: "Third",
    },
    {
      image: Course04,
      alt: "Fourth",
    },
    {
      image: Course05,
      alt: "Fifth",
    },
  ];

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
