import React from "react";
import { Carousel } from "react-bootstrap";
import { coursesImages } from "../../../Data";
import classes from "./CoursesCarousel.module.css";

const CoursesCarousel = () => {
  return (
    <div className={classes["carousel-container"]}>
      <Carousel touch={true}>
        {coursesImages.map(({ image, alt }, i) => {
          return (
            <Carousel.Item key={`carousel${i}`} interval={3000}>
              <div className={classes["img-container"]}>
                <img
                  className={classes["img-carousel"]}
                  src={image}
                  alt={`${alt} slide`}
                />
                <div className={classes["empty-space"]}></div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CoursesCarousel;
