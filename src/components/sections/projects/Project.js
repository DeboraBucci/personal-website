import React from "react";
import Link from "../../UI/Link";

const Project = ({
  project: { num, title, link, info, extraInfo },
  language,
  opts,
}) => {
  return (
    <div className="project-card" key={`project-${num}`}>
      <div className="project-card__side project-card__side--front">
        <div className={`project-card__picture project-card__picture-${num}`}>
          &nbsp;
        </div>
        <h3 className="project-card__heading">{title}</h3>

        <div className="project-card__details">
          <ul className="project-card__list">
            {info.map((item, i) => (
              <li className="project-card__item" key={Math.random()}>
                <span className="project-card__item--first">
                  {opts.list[i]}:
                </span>
                <span className="project-card__item--second">
                  {item[language] || item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={`project-card__side project-card__side--back project-card__side--back-${num}`}
      >
        <h3 className="heading-tertiary">{title}</h3>

        <Link
          href={`https://deborabucci.github.io/${link}`}
          className="btn btn--white"
        >
          {opts.btn.big}
        </Link>

        <Link
          href={`https://github.com/DeboraBucci/${link}`}
          className="project-card__btn-source-code"
        >
          {opts.btn.small} <i className="fa-solid fa-code"></i>
        </Link>

        {extraInfo?.[language]}
      </div>
    </div>
  );
};

export default Project;
