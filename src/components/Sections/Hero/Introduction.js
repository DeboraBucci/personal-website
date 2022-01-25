import React, { Fragment } from "react";
import Typing from "../../Typing/Typing";
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <Fragment>
      <div>
        <p className={classes.greeting}>Hello!</p>

        <h1 className={classes.title}>
          <span>I'm</span>
          <div className={"underline--magical"}>Débora Bucci</div>
        </h1>
      </div>

      <p className={classes.professions}>
        <span>a</span>
        <span className={classes.typing}>
          <Typing
            words={[
              "Frontend Developer",
              "Web Designer",
              "Forever Student",
              "Devote Christian",
            ]}
            cursorType={"|"}
          />
        </span>
      </p>
    </Fragment>
  );
};

export default Introduction;
