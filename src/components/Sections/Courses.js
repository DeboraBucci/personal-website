import React from "react";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import Header from "../Header/Header";
import "./Courses.css";

const Courses = () => {
  return (
    <section id={"certifications"}>
      <Header title="My badges of Honor!" subtitle="courses" />
      <CoursesCarousel />
    </section>
  );
};

export default Courses;
