import { useState } from "react";

import Header from "../../UI/Header";
import CertificationDetails from "./CertificationDetails";

import { certifications } from "../../../database/languages-text";
import { Certification } from "../../../database/data-types";

const Certifications = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState(certifications[0]);

  const closeModalHandler = () => setModalIsOpened(false);
  const openModalHandler = (certificate: Certification) => {
    setModalIsOpened(true);
    setModalInfo(certificate);
  };

  return (
    <section className="certifications" id="certifications">
      {modalIsOpened && (
        <CertificationDetails
          closeModalHandler={closeModalHandler}
          modalInfo={modalInfo}
        />
      )}
      <Header section="certifications" />

      <div className="certifications__container">
        {certifications.map((certificate) => (
          <div
            onClick={openModalHandler.bind(null, certificate)}
            key={certificate.alt}
            className={`certifications__image-box certifications__image-box--${certificate.institute}`}
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
