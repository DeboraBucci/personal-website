import React, { useState } from "react";

import Header from "../../UI/Header";
import { coursesInfo } from "../../../database/data";

const Courses = () => {
  const [coursesPositions, setCoursesPositions] = useState(
    coursesInfo.positions
  );

  const sliderHandler = (direction) => {
    const positions = coursesPositions.slice();

    if (direction === "left") {
      const shiftedCourse = positions.shift();
      positions.push(shiftedCourse);
    }

    if (direction === "right") {
      const poppedCourse = positions.pop();
      positions.unshift(poppedCourse);
    }

    setCoursesPositions(positions);
  };

  const leftArrowHandler = () => sliderHandler("left");
  const rightArrowHandler = () => sliderHandler("right");

  return (
    <section className="section-courses" id="courses">
      <Header section="courses" />

      <div className="carousel">
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={leftArrowHandler}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {coursesInfo.courses.map(({ image, alt }, i) => {
          return (
            <div
              key={alt}
              className={`carousel__slide carousel__slide--${coursesPositions[i]}`}
            >
              <img
                className="carousel__img"
                width={900}
                height={669}
                src={image}
                alt={`${alt} course's certificate`}
              />
            </div>
          );
        })}

        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={rightArrowHandler}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default Courses;
