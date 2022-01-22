import React from "react";
import CoursesCarousel from "../CoursesCarousel/CoursesCarousel";
import Header from "../Header/Header";
import "./Courses.css";
import "../../general-styles.css";

const Courses = () => {
  return (
    <section id={"certifications"}>
      <Header title="My badges of Honor!" subtitle="courses" />
      <main className="courses-container">
        <CoursesCarousel />
      </main>
    </section>
  );
};

export default Courses;
