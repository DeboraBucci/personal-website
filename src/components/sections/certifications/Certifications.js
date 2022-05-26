import React from "react";
import { certificationImages } from "../../../Data";
import Header from "../../UI/Header";
import Link from "../../UI/Link";

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <Header title="These are my certificates" subtitle="certifications" />

      <div className="certifications__container">
        {certificationImages.map((certificate) => (
          <div className="certifications__image-box">
            <Link href={certificate.href}>
              <img
                src={certificate.image}
                alt={`${certificate.alt} certificate`}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
