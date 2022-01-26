import React, { Fragment } from "react";
import { sections } from "../../Data";

const Sections = () => {
  return (
    <Fragment>
      {sections.map(({ content, id }) => (
        <section key={id} id={id}>
          {content}
        </section>
      ))}
    </Fragment>
  );
};

export default Sections;
