import React, { Fragment } from "react";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import Header from "../Header/Header";
import "./Courses.css";

const Courses = () => {
  return (
    <Fragment>
      <Header title="My badges of Honor!" subtitle="courses" />
      <CoursesCarousel />
    </Fragment>
  );
};

export default Courses;
