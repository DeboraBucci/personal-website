import React, { useCallback, useEffect, useState } from "react";

import Header from "../../UI/Header";
import { courses, coursesPositions } from "../../../database/data";

const Courses = () => {
  const [curCoursesPositions, setCurCoursesPositions] =
    useState(coursesPositions);
  const [activeCourse, setActiveCourse] = useState(1);
  const [slideIsHovered, setSlideIsHovered] = useState(false);
  const [touchPosition, setTouchPosition] = useState(null);

  // SLIDER HANDLER
  const sliderHandler = useCallback(
    (direction) => {
      const positions = curCoursesPositions.slice();

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

      setCurCoursesPositions(positions);
    },
    [curCoursesPositions]
  );

  // LEFT AND RIGHT ARROW HANDLERS
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
    const targetCourse = +e.target.textContent.slice(-1);
    const oriPositionsCopy = coursesPositions.slice();

    const startingPositions = oriPositionsCopy.splice(-(targetCourse - 1));
    const newPositions = startingPositions.concat(oriPositionsCopy);

    setCurCoursesPositions(newPositions);
    setActiveCourse(targetCourse);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) rightArrowHandler();
    if (diff < -5) leftArrowHandler();

    setTouchPosition(null);
  };

  return (
    <section className="section-courses" id="courses">
      <Header section="courses" />

      <ul
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <button
          className="carousel__arrow carousel__arrow--left"
          onClick={leftArrowHandler}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        {courses.map(({ link, image }, i) => {
          return (
            <li
              key={`${i + 1}--course-certificate`}
              onMouseEnter={slideIsHoveredHandler}
              onMouseLeave={slideNotHoveredHandler}
              className={`carousel__slide carousel__slide--${curCoursesPositions[i]}`}
            >
              <a href={link} target="_blank" rel="nonopener noreferrer">
                <img
                  className="carousel__img"
                  width={900}
                  height={669}
                  src={image}
                  alt={`Course's certificate number ${i + 1}`}
                />
              </a>
            </li>
          );
        })}

        <button
          className="carousel__arrow carousel__arrow--right"
          onClick={rightArrowHandler}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <ul className="carousel__shortcuts">
          {coursesPositions.map((positionNum) => (
            <li key={`Slide-shortcut-number-${positionNum}`}>
              <button
                key={positionNum}
                aria-label={`slide shortcut for course number ${positionNum}`}
                onClick={shortcutHandler}
                className={
                  positionNum === activeCourse
                    ? "carousel__shortcuts--active"
                    : ""
                }
              >
                <span className="carousel__shortcuts--hidden">
                  {`slide shortcut for course number ${positionNum}`}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </ul>
    </section>
  );
};

export default Courses;
