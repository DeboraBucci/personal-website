import React from "react";

const Project = ({ title, link, num, info, password, mail }) => {
  return (
    <div className="card" key={`project-${num}`}>
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture-${num}`}>&nbsp;</div>
        <h3 className="card__heading">{title}</h3>

        <div className="card__details">
          <ul className="card__list">
            {info.map((item) => (
              <li className="card__item" key={Math.random()}>
                <span className="card__item--first">{item.title}:</span>
                <span className="card__item--second">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`card__side card__side--back card__side--back-${num}`}>
        <h3 className="heading-tertiary">{title}</h3>

        <a
          href={link}
          target={"_blank"}
          rel="noopener"
          className="btn btn--white"
        >
          Visit Project
        </a>

        {num === "1" && (
          <div className="card__instructions">
            <p className="card__instructions--text">
              Mail: <code>challenge@alkemy.org</code>
            </p>

            <p className="card__instructions--text">
              Password: <code>react</code>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
