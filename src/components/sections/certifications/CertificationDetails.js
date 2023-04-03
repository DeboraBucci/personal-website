import React, { useContext } from "react";

import Backdrop from "../../UI/Backdrop";
import Link from "../../UI/Link";

import LanguageContext from "../../../context/language-context";
import LevelDisplay from "../../UI/LevelDisplay";

const CertificationsModal = ({ closeHandler, info }) => {
  const languageCtx = useContext(LanguageContext);

  return (
    <div className="certifications-modal">
      <button onClick={closeHandler} className="certifications-modal__btn">
        <i className="fa-solid fa-xmark"></i>
      </button>

      <div className="certifications-modal__content">
        <div className="certifications-modal__img">
          <img src={info.image} alt={info.alt} />
        </div>

        <div className="certifications-modal__info">
          <h3 className="certifications-modal__title">My Journey</h3>
          <div className="thin-line hin-line--big"></div>

          <p className="certifications-modal__date">
            {info.date[languageCtx.language]}
          </p>

          <div className="certifications-modal__text">
            {info.text[languageCtx.language].map((sentence) => (
              <p key={sentence.slice(1, 10)}>{sentence}</p>
            ))}
          </div>

          <LevelDisplay level={info.complexity} title={"Complexity"} />

          <div className="thin-line cthin-line--big"></div>
        </div>

        <div className="certifications-modal__cta">
          <Link
            href={info.href}
            className={`certifications-modal__link ${
              info.href === "" && "disabled"
            }`}
          >
            Certification's link
          </Link>
        </div>
      </div>
    </div>
  );
};

const CertificationsOverlay = ({ closeModalHandler, modalInfo }) => (
  <div className="overlay">
    <Backdrop onClick={closeModalHandler} />
    <CertificationsModal closeHandler={closeModalHandler} info={modalInfo} />
  </div>
);

export default CertificationsOverlay;
