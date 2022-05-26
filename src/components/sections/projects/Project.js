import React from "react";
import Link from "../../UI/Link";

const Project = ({ title, link, num, info, extraInfo }) => {
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

        <Link
          href={`https://deborabucci.github.io/${link}`}
          className="btn btn--white"
        >
          Visit Project
        </Link>

        <Link
          href={`https://github.com/DeboraBucci/${link}`}
          className="card__btn-source-code"
        >
          Source Code <i className="fa-solid fa-code"></i>
        </Link>

        {extraInfo}
      </div>
    </div>
  );
};

export default Project;
