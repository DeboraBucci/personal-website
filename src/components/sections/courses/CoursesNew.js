import React, { useCallback, useEffect, useState } from "react";

import Header from "../../UI/Header";
import { coursesInfo } from "../../../database/data";

const Courses = () => {
  const [coursesPositions, setCoursesPositions] = useState(
    coursesInfo.positions
  );
  const [activeCourse, setActiveCourse] = useState(1);
  const [slideIsHovered, setSlideIsHovered] = useState(false);

  const sliderHandler = useCallback(
    (direction) => {
      const positions = coursesPositions.slice();

      if (direction === "right") {
        const shiftedCourse = positions.shift();
        positions.push(shiftedCourse);
        setActiveCourse((prev) => (prev === 1 ? 8 : prev - 1));
      }

      if (direction === "left") {
        const poppedCourse = positions.pop();
        positions.unshift(poppedCourse);
        setActiveCourse((prev) => (prev === 8 ? 1 : prev + 1));
      }

      setCoursesPositions(positions);
    },
    [coursesPositions]
  );

  // LEFT AND RIGHT ARROW HANDLER
  const leftArrowHandler = () => sliderHandler("right");
  const rightArrowHandler = useCallback(
    () => sliderHandler("left"),
    [sliderHandler]
  );

  // AUTO SLIDING
  useEffect(() => {
    const autoSlidingTimer = setTimeout(
      () => !slideIsHovered && rightArrowHandler(),
      2000
    );
    return () => clearTimeout(autoSlidingTimer);
  }, [rightArrowHandler, slideIsHovered]);

  // HOVERED SLIDE DETECTION
  const slideIsHoveredHandler = () => setSlideIsHovered(true);
  const slideNotHoveredHandler = () => setSlideIsHovered(false);

  // SHORTCUTS HANDLER
  const shortcutHandler = (e) => {
    const targetCourse = +e.target.textContent;
    const originalPositions = coursesInfo.positions.slice();

    const startingPositions = originalPositions.splice(-(targetCourse - 1));
    const newPositions = startingPositions.concat(originalPositions);

    setCoursesPositions(newPositions);
    setActiveCourse(targetCourse);
  };

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
              onMouseEnter={slideIsHoveredHandler}
              onMouseLeave={slideNotHoveredHandler}
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
        <div className="carousel__shortcuts">
          {coursesInfo.courses.map(({ alt }) => (
            <button
              key={alt}
              onClick={shortcutHandler}
              className={
                +alt === activeCourse ? "carousel__shortcuts--active" : ""
              }
            >
              {alt}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
