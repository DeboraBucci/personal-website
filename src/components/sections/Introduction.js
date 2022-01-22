import React from "react";

const Introduction = ({ greeting = "HELLO !", fullName = "Anonymous" }) => {
  return (
    <div className="introduction--container">
      <p className={"flex h-centered g-10px"}>{greeting}</p>
      <h1>
        <span>I'm</span>
        <div className={"underline--magical flex v-centered"}>
          <div>{fullName}</div>
        </div>
      </h1>
    </div>
  );
};

export default Introduction;
