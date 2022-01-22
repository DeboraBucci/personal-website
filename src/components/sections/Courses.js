import React from "react";
import CoursesCarousel from "../carousel/CoursesCarousel";
import Header from "./Header";
import "./Courses.css";
import "../../general-styles.css";

const Courses = () => {
  return (
    <section>
      <Header title="My badges of Honor!" subtitle="courses" />
      <main className="courses-container">
        <CoursesCarousel />
      </main>
    </section>
  );
};

export default Courses;
