import React from "react";
import { Carousel } from "react-bootstrap";
import { coursesImages } from "../../../Data";
import classes from "./CoursesCarousel.module.css";

const CoursesCarousel = () => {
  return (
    <Carousel touch={true} className={classes["carousel-container"]}>
      {coursesImages.map(({ image, alt }, i) => (
        <Carousel.Item key={`carousel${i}`} interval={2000}>
          <div className={classes["img-box"]}>
            <img className={classes.img} src={image} alt={`${alt} slide`} />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CoursesCarousel;
