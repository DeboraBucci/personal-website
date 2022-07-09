import React, { useState } from "react";

import { certifications } from "../../../Data";
import Header from "../../UI/Header";
import CertificationsOverlay from "../../UI/CertificationsOverlay";

const Certifications = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  const closeModalHandler = () => setModalIsOpened(false);
  const openModalHandler = (certificate) => {
    setModalIsOpened(true);
    setModalInfo(certificate);
  };

  return (
    <section className="certifications" id="certifications">
      {modalIsOpened && (
        <CertificationsOverlay
          closeModalHandler={closeModalHandler}
          modalInfo={modalInfo}
        />
      )}
      <Header title="These are my certificates" subtitle="certifications" />

      <div className="certifications__container">
        {certifications.map((certificate) => (
          <div
            onClick={openModalHandler.bind(null, certificate)}
            key={certificate.alt}
            className="certifications__image-box"
          >
            <img
              src={certificate.image}
              alt={`${certificate.alt} certificate`}
            />
            <i className="fa-solid fa-magnifying-glass certifications__zoom"></i>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
