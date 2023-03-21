import "./Contact.css";
import { useTranslation } from "react-i18next";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section className="contact-section">
      <Helmet>
        <title>{t("טופס יצירת קשר - השאירו את פרטיכם")}</title>
        <meta
          name="description"
          content="טופס ליצירת קשר - אנא מלאו את השדות הבאים"
        />
        <link rel="canonical" href="/contact-us" />
      </Helmet>
      <div>
        <h1>{t("Fill your details and we will get back to you as soon")}</h1>
        <h2>{t("Please fill in the following fields :")}</h2>
      </div>
      <div className="contact-us-form">
        <ContactForm />
      </div>
      <div className="contact-details">
        <span>{t("Phone")} : 052XXXXXX</span>
        <span>{t("Email")} : info@Cocktails4Ua.com</span>
      </div>
    </section>
  );
};
export default Contact;
