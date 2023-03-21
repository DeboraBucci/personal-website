import React from "react";
import Link from "../../UI/Link";

const Project = ({
  project: { num, title, link, info, extraInfo },
  language,
  opts,
}) => {
  return (
    <div className="card" key={`project-${num}`}>
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture-${num}`}>&nbsp;</div>
        <h3 className="card__heading">{title}</h3>

        <div className="card__details">
          <ul className="card__list">
            {info.map((item, i) => (
              <li className="card__item" key={Math.random()}>
                <span className="card__item--first">{opts.list[i]}:</span>
                <span className="card__item--second">
                  {item[language] || item}
                </span>
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
          {opts.btn.big}
        </Link>

        <Link
          href={`https://github.com/DeboraBucci/${link}`}
          className="card__btn-source-code"
        >
          {opts.btn.small} <i className="fa-solid fa-code"></i>
        </Link>

        {extraInfo?.[language]}
      </div>
    </div>
  );
};

export default Project;
