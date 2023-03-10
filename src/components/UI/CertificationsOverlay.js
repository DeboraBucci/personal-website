import React, { useEffect } from "react";
import { Backdrop } from "./Backdrop";
import Link from "./Link";

const CertificationsModal = ({ closeHandler, info }) => {
  useEffect(() => {
    const complexityPoints = document.querySelectorAll(".complexity__point");
    complexityPoints.forEach((point) => {
      const number = point.classList[1].slice(point.classList[1].length - 1);
      if (number <= info.complexity) point.style.backgroundColor = "#ff916a";
    });
  }, [info.complexity]);

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

          <p className="certifications-modal__date">Issued in {info.date}</p>

          <div className="certifications-modal__text">
            {info.text.map((sentence) => (
              <p key={sentence.slice(1, 10)}>{sentence}</p>
            ))}
          </div>

          <h4>Complexity</h4>
          <div className="complexity">
            <div className="complexity__point complexity__point--1"></div>
            <div className="complexity__point complexity__point--2"></div>
            <div className="complexity__point complexity__point--3"></div>
            <div className="complexity__point complexity__point--4"></div>
            <div className="complexity__point complexity__point--5"></div>
          </div>

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
