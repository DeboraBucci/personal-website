import React, { Fragment } from "react";
import Typing from "../../UI/Typing";
import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <Fragment>
      <div className={classes.content}>
        <p className={classes.greeting}>Hello!</p>

        <h1 className={classes.title}>
          <span>I'm</span>
          <div className={"underline--magical"}>Débora Bucci</div>
        </h1>

        <p className={classes.professions}>
          <span>a</span>
          <span className={classes.typing}>
            <Typing
              words={[
                "Frontend Developer",
                "Web Designer",
                "Forever Student",
                "Devout Christian",
              ]}
              cursorType={"|"}
            />
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default Introduction;
