import { useContext } from "react";
import Link from "../../UI/Link";

import LanguageContext from "../../../context/language-context";
import { contact } from "../../../database/languages-text";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const info = contact.languages[language];

  return (
    <section className="section-contact" id="contact">
      <div className="section-contact__text">
        <p className="section-contact__text--subtitle">{info.subtitle}</p>
        <h2 className="heading-secondary section-contact__text--title">
          {info.title}
        </h2>
        <p className="section-contact__text--comment">{info.comment}</p>
      </div>
      <ul className="section-contact__list">
        {contact.links.map(({ href, icon, text }) => {
          const finalText = typeof text === "object" ? text[language] : text;

          return (
            <li key={`${text} contact link`} className="section-contact__item">
              <Link className="section-contact__link" href={href}>
                <i className={icon} />
                {finalText}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Contact;
