import React from "react";
import Icon from "../../UI/Icon";
import Link from "../../UI/Link";

import { contactLinks } from "../../../Data";

const Contact = () => {
  return (
    <section className="section-contact" id="contact">
      <div className="section-contact__text">
        <p className="section-contact__text--subtitle">Let's talk!</p>
        <h2 className="heading-secondary section-contact__text--title">
          Contact info
        </h2>
        <p className="section-contact__text--comment">
          A penny for your thoughts!
        </p>
      </div>
      <ul className="section-contact__list">
        {contactLinks.map(({ href, icon, text }) => (
          <li className="section-contact__item">
            <Link className="section-contact__link" href={href}>
              <Icon icon={icon} />
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Contact;
